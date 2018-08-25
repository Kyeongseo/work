function snsPost(str){
	var option = "",
		url = "",
		tmp_open = "",
		text = encodeURIComponent($('meta[property=og\\:description]').attr('content')),
		encURL = encodeURIComponent(location.href),
		title = $('meta[property=og\\:site_name').attr('content')+' - '+$('meta[property=og\\:title').attr('content'),
		encTitle = encodeURIComponent(title),
		arr = document.location.href.splite("/"),
		address = arr[0] + arr[1] + "//" + arr[2] + "/maker/stage/"+$("#layer_stage_view").attr("data-seq"),
		text2 = encodeURIComponent($("#layer_stage_view").find(".viewdesc").text()),
		title2 = $('meta[property=og\\:site_name]').attr('content')+' - '+$("#layer_stage_view").find(".layerTi").html();

		if(str == "twitter"){
			url = "https://twitter.com/intent/tweet?text="+encTitle+"&url="+encURL;
			option = "width=600,height=450,scrollbars=no,resizable=no";
			tmp_open = window.open(url,"share_"+str, option);
		}else if(str == "facebook"){
		}else if(str == "kakaostory"){
		}else if(str == "blogger"){
		}else if(str == "band"){
		}else if(str == "urlShare"){
			prompt("URL 공유하기 \n Ctrl + C 로 복사하여 사용하세요", location.protocol + "//" + location.host + location.pathname);
		}
}