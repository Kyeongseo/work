worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    client_max_body_size 100m;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name _;

        if ($http_x_forwarded_proto = http) {
                rewrite ^(?!/secure)/ https://$http_host$request_uri? permanent;
            }

        location / {
                      proxy_set_header        X-Real-IP $remote_addr;
                      proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
                      proxy_set_header        Host $http_host;
                      proxy_pass              http://10.0.3.174:8080;
                    }

        location ~* ^/(?=contents|origin) {

rewrite ^(?!/secure)/ https://image.everydayplayfull.com$request_uri? permanent;
            access_log          off;
        }

        location ~* \.(gif|jpg|png|js|css|bmp|swf|xml|ico|html|jpeg|map|webp|ttf|eot|woff|woff2|html)$ {
            root            /home/ec2-user/play-ground-static/webapp/;
            access_log      off;
        }
    }
}