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
// Using a selector:
//$("a.buy").colorbox({inline:true, href:"#buy"});
/*var buyHtml = $('div.buy-book').html();
    $('.buy-book-link').colorbox({
            html:buyHtml,
            width: '95%',
            height: '95%',
            maxWidth: '700px',
            maxHeight: '768px',
        });*/
$('.buy-book-link').magnificPopup({

                type:'inline',
                midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
                removalDelay: 500, //delay removal by X to allow out-animation
                callbacks: {
                        beforeOpen: function() {

                                this.st.mainClass = this.st.el.attr('data-effect');
                        }

                }
        });
// Forms with ajax process
    $('form[data-remote]').on('submit', function(e){
        console.log('msg')
        e.preventDefault();
        var form =$(this);
        var method = form.find('input[name="_method"]').val() || 'POST';
        var url = form.prop('action');
        form.find('.loader').show();
        $.ajax({
            type: method,
            url: url,
            data: form.serialize(),
            success: function(){
                var message = form.data('remote-success-message');
                form.find('.loader').hide();
                if(message)
                {

                    $('.message').removeClass('message-error').addClass('message-success').html(message).fadeIn(300).delay(4500).fadeOut(300);
                }
            },
            error:function(){
                form.find('.loader').hide();
                $('.message').removeClass('message-success').addClass('message-error').html('Whoops, looks like something went wrong.').fadeIn(300).delay(4500).fadeOut(300);

            }
        });

        limpiaForm(form);

        
    });

    $('input[data-confirm], button[data-confirm]').on('click', function(e){
       var input = $(this);

        input.prop('disabled','disabled');

        if(! confirm(input.data('confirm'))){
            e.preventDefault();
        }
    });

    function limpiaForm(miForm) {

        // recorremos todos los campos que tiene el formulario
        $(":input", miForm).each(function() {
            var type = this.type;
            var tag = this.tagName.toLowerCase();
            //limpiamos los valores de los campos…
            if (type == 'text' || type == 'password'  || type == 'email' || tag == 'textarea')
                this.value = "";
            // excepto de los checkboxes y radios, le quitamos el checked
            // pero su valor no debe ser cambiado
            else if (type == 'checkbox' || type == 'radio')
                this.checked = false;
            // los selects le ponesmos el indice a -
            else if (tag == 'select')
                this.selectedIndex = -1;
        });
    }


})(jQuery);

