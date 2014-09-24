(function($){
	var menu = $('.menu'),
		btnMovil = $('#btn_nav'),
		btnLogin = $('.btn-login');

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

    $('.gallery-link').colorbox();


})(jQuery);

