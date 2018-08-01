jQuery(document).ready(function(){
  'use strict';

  var popupBtns = jQuery('.popup_action--show');

  popupBtns.on('click', function(event){
    event.preventDefault();

    var popupBlock = jQuery(jQuery(this).attr('href'));

    jQuery.colorbox({
      inline:true, 
      href:popupBlock, 
      maxHeight: '98%',
      overlayClose: true,
      fixed: true,
      scrolling: true,
    });
  });

});