    function backbutton(){
        if (window.history && window.history.pushState) {
            window.history.pushState('forward', null, null);
            $(window).on('popstate', function() {
                $(".btnClose").click();
            });
        }
    }


    
				int contypeIndex = lastDetail.indexOf("></div>");
				String appendLast = lastDetail.substring(contypeIndex);
				System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
				System.out.println(lastDetail.substring(0, contypeIndex));
				System.out.println(appendLast);
//				lastDetail = lastDetail.substring(0, contypeIndex) + " onclick=\"javascript:backbutton();\"";
