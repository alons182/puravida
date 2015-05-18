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
            width: '95%',
            height: '95%',
            maxWidth: '700px',
            maxHeight: '450px',
        });

   /* $aside_buttons.stickyfloat({
         duration: 400,
         //offsetY: 200,
         stickToBottom: true
    });*/

})(jQuery);

