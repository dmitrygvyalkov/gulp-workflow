jQuery(document).ready(function() {

  "use strict";

  var toggles = jQuery(".c-hamburger");
  var menu = jQuery('.fscreen_menu');
  var body = jQuery('body');
  var content = jQuery('#header .wrp');
  var mobileWrp = jQuery('#header_mobile');

  var mobileMenu = content.clone().appendTo(mobileWrp);

  mobileWrp.addClass('c-hamburger_menu');

  toggles.on('click', function(event) {
    event.preventDefault();

    toggles.toggleClass('c-hamburger--active');
    mobileWrp.toggleClass('c-hamburger_menu--active');
    body.toggleClass('mobile-menu-opened');
  });

  jQuery('.c-hamburger_menu .fscreen_menu-link').on('click', function(event) {
    toggles.toggleClass('c-hamburger--active');
    mobileWrp.toggleClass('c-hamburger_menu--active');
    body.toggleClass('mobile-menu-opened');
  });
});