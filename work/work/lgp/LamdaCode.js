console.log('Loading function');

// dependencies
var async = require('async');
var AWS = require('aws-sdk');
var gm = require('gm').subClass({ imageMagick: true }); // Enable ImageMagick integration.
var util = require('util');

// constants
var contents_resolutions =["1000xall","660xall", "200xall"];
var profile_resolutions =["349x349"];

// get reference to S3 client 
var s3 = new AWS.S3();
 
exports.handler = function(event, context) {

    // Get the object from the event and show its content type
    console.log("Reading options from event:\n", util.inspect(event, {depth: 5}));
    var srcBucket = event.Records[0].s3.bucket.name;
    var srcKey    = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    console.log("srcKey: ", srcKey);
    if(srcKey.charAt(srcKey.length-1) == "/"){
        context.done();
    }
    var srcKeyArr = srcKey.split("/");
    var directory = srcKeyArr[1];
    var imageFile = srcKeyArr[srcKeyArr.length-1];

    // Download the image from S3
    s3.getObject({
        Bucket: srcBucket,
        Key: srcKey
        }, function(err, data){

            if (err)
                return console.error('unable to download image ' + err);

            var contentType = data.ContentType;
            var file = new Buffer(data.Body);
            var original = gm(file);
            original.orientation(function(err, orientation){
                console.log("orientation", orientation);
                original.size(function(err, size){

                    if (err)
                        return console.error(err);

                    if(orientation == "LeftBottom" || orientation == "RightTop"){
                        var pre_width = size.width;
                        var pre_heigh = size.height;
                        size.width = pre_heigh;
                        size.height = pre_width;
                    }
                    if(directory === "contents"){
                        async.each(contents_resolutions,
                        function (resolution, callback) {
                            console.log("size", size);
                            resize_photo(resolution, size, original, directory, srcBucket, srcKeyArr, contentType, orientation, callback);
                        },
                        function (err) {
                            if (err) {
                                console.error(
                                    'Unable to resize ' + srcBucket +
                                    ' due to an error: ' + err
                                );
                            } else {
                                console.log(
                                    'Successfully resized ' + srcBucket
                                );
                            }

                            context.done();
                        });
                    }else if(directory === "profile"){
                        async.each(profile_resolutions,
                        function (resolution, callback) {
                            resize_photo(resolution, size, original, directory, srcBucket, srcKeyArr, contentType, orientation, callback);
                        },
                        function (err) {
                            if (err) {
                                console.error(
                                    'Unable to resize ' + srcBucket +
                                    ' due to an error: ' + err
                                );
                            } else {
                                console.log(
                                    'Successfully resized ' + srcBucket
                                );
                            }

                            context.done();
                        });
                    }else{
                        console.log('Unknown directory');
                    }
                    
                });
            });
            //transform, and upload to a different S3 bucket.
            
        });
};

//wrap up variables into an options object
var resize_photo = function(resolution, size, original, directory, srcBucket, srcKeyArr, contentType, orientation, done) {

    var dstBucket = "";
    if(srcBucket === "origin-prod.everydayplayfull.com"){
        if(directory == "contents"){
            dstBucket = "contents-prod.everydayplayfull.com";
        }else if(directory == "profile"){
            dstBucket = "profile-prod.everydayplayfull.com";
        }
    }
    
    console.log("size.width",  size.width);
    console.log("size.height", size.height);

    var resolution_width = resolution.split("x")[0];
    var resolution_height = resolution.split("x")[1];
    if(resolution_height == 'all'){
        resolution_height = size.height * resolution_width / size.width;
    }
    var max_size = 0
    var scalingFactor = 0;  

    max_size = Math.max(resolution_width, resolution_height);
    scalingFactor = Math.min(max_size / size.width, max_size / size.height);


    var width  = scalingFactor * size.width;
    var height = scalingFactor * size.height;
    console.log("width",width);
    console.log("height",height);
    var filePath = "";
    for (var i = 2; i <= srcKeyArr.length-1; i++) {
        filePath += "/" + srcKeyArr[i];
    }
    var dstKey = directory + "/" + resolution + filePath;
    console.log("dstKey", dstKey);

    // transform, and upload to a different S3 bucket.
    async.waterfall([
        function transform(next) {
            // Transform the image buffer in memory.
            if(orientation == "LeftBottom" || orientation == "RightTop"){
                original.resize(height, width)
                .autoOrient()
                .toBuffer(null, function(err, buffer) {

                    if (err) {
                        next(err);
                    } else {
                        next(null, buffer);
                    }
                });
            }else{
                original.resize(width, height)
                .autoOrient()
                .toBuffer(null, function(err, buffer) {

                    if (err) {
                        next(err);
                    } else {
                        next(null, buffer);
                    }
                });
            }
            

        },
        function upload(data, next) {
            // Stream the transformed image to a different S3 bucket.
            s3.putObject({
                    Bucket: dstBucket,
                    Key: dstKey,
                    Body: data,
                    ContentType: contentType
                },
                next);
            }
        ], function (err) {

            console.log('finished resizing ' + dstBucket + '/' + dstKey);

            if (err) {
                console.error(err)
                ;
            } else {
                console.log(
                    'Successfully resized ' + dstKey
                );
            }

            done(err);
        }
    );
};