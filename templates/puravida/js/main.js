(function(){
	var menu = $('.menu'),
		btnMovil = $('#btn_nav');

	menu.find('.item-109 a').addClass('btn btn-red');

	// NAV MOBILE
    btnMovil.click(function(){
        menu.toggle();
       
    });

})();

