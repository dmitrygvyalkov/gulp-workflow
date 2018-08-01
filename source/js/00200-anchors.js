jQuery(document).ready(function(){
  'use strict';

  function open_anchor(link) {
    var target = jQuery(link);


      var destinationIndent = Number(target.data('indent'));

      if (jQuery(window).width() <= 500) {
        var destinationIndent = Number(target.data('indentMobile'));
      } else {
        var destinationIndent = Number(target.data('indent'));
      }

      console.log('destinationIndent: ' + destinationIndent);

      if (!destinationIndent) {
        destinationIndent = 120;
      }

      var destination = target.offset().top - destinationIndent;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
  }

  jQuery(document).ready(function(){
    if (window.hashName) open_anchor(window.hashName);
  });

  jQuery(document).ready(function() {

    jQuery("a.action--anchor").click(function(event) {
      event.preventDefault();

      var elementClick = jQuery(this).attr("href");
      if (elementClick.substring(0, 1) == '/') {
        elementClick = elementClick.substr(1);
      }
      open_anchor(elementClick);
      jQuery('#header_mobile').removeClass('c-hamburger_menu--active');
      jQuery('.c-hamburger').removeClass('c-hamburger--active');
    });

  });

});