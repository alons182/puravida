(function($){
	var menu = $('.menu'),
		btnMovil = $('#btn_nav'),
		btnLogin = $('.btn-login'),
        $aside_buttons = $('.aside-buttons');

	//menu.find('.item-109 a').addClass('btn btn-red');

	// Login form
    btnLogin.click(function(e){
        $('#login-form').toggle();
 		e.preventDefault();     
    });
	// NAV MOBILE
    btnMovil.click(function(){
        menu.toggle();
       
    });

    $('.gallery-link.shopping').colorbox({rel: 'gallery-shopping'});
    $('.gallery-link.feria').colorbox({rel: 'gallery-feria'});

    var videoHtml = $('div.video').html();
    $('.video-link').colorbox({
            html:videoHtml,
            height: 450
        });

    $aside_buttons.stickyfloat({
         duration: 400,
         //offsetY: 200,
         stickToBottom: true
    });

})(jQuery);

