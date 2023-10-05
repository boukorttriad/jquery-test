/*global $, alert, console*/

$(function(){ 
  'use strict'
  // nice scroll
  $('html').niceScroll();
  //change header height
  
  $('.header').height($(window).height())
  //scroll to features
  $('.header .arraw i').click(function(){
    $('html, body').animate({
      scrollTop: $('.features').offset().top
      
    },1000);
  })
  // show hidden item from work
  $('.show-more').click(function(){
    $('.hidden').fadeIn();
  });
  //check  testimonials
  let leftArrow = $('.testimonials .fa-chevron-left')
  let rightArrow = $('.testimonials .fa-chevron-right')
  function checkClient() {
    if ($('.client:first').hasClass('active')){
      leftArrow.fadeOut();

    } else{
      leftArrow.fadeIn();
    }
    
    if ($('.client:last').hasClass('active')){
      rightArrow.fadeOut();

    } else{
      rightArrow.fadeIn();
    }
  }
  checkClient();
  $('.testimonials i').click(function(){
    if($(this).hasClass('fa-chevron-right')){
      $('.testimonials .active').fadeOut(100, function(){
        $(this).removeClass('active').next('.client').addClass('actitve').fadeIn();
        checkClient();
        
      });
      
    } else {
      $('.testimonials .active').fadeOut(100, function(){
        $(this).removeClass('active').prev('.client').addClass('actitve').fadeIn();
        checkClient();
      })
      
    } 
    
  })
});