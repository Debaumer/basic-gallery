'use strict';

//$(selector).animate(obj,time,callback){'#slider, slides'}.animate({'margin-left': '-=720'},1000)

$(function() {

  //config
  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOMP
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');
  var $rightArrow = $('#rightArrow');
  var $leftArrow = $('#leftArrow');

  var interval;

  function startSlider() {
    interval = setInterval(function() {
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
          currentSlide++;
          if(currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
          }
      });
    },pause);
  }

  function rightSlide() {
    stopSlider();
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        currentSlide++;
        if(currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
    });
  };

  function stopSlider() {
    clearInterval(interval);
    console.log(currentSlide);
  }

  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
  $rightArrow.on('click', rightSlide);
  //setInterval
    //animate margin-left
    //If it's last slide, go to the position 1(0px);

    //listen for mouseenter and pause
    //resume on mouseleave
    startSlider();
});
