jQuery(document).ready(function(){
  'use strict';

  $('.accordion_title').on('click', function(event){
    event.preventDefault();

    var accordionBlock = $(this).parent('.accordion');

    console.log(accordionBlock);

    accordionBlock.toggleClass('accordion--opened');
  });

});