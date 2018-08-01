(function(){
    'use strict';
    
    jQuery(document).delegate('.form--action-ajax','submit', function(event) {
        event.preventDefault();

        var form = jQuery(this);

        var actionUrl = form.attr('action');

        var politicsCheckbox = form.find('input[name=politics]');

        if (politicsCheckbox.is(':checked')) {
            var formData = new FormData(this);
            
            $.ajax({
                url: actionUrl,
                type: 'POST',
                xhr: function() {
                    var myXhr = $.ajaxSettings.xhr();
                    return myXhr;
                },
                success: function(html){
                    if (html.status) {
                        alert(html.data);
                    } else {
                        window.location.href = "/spasibo/";
                    }
                    
                },
                data: formData,
                cache: false,
                contentType: false,
                processData: false
            });
        } else {
            alert('Невозможна отправка формы без согласия с политикой конфиденциальности');
        }

        
    });

})();