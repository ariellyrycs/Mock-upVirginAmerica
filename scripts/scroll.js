/**
 * Created by arobles on 8/1/14.
 */


(function ($) {
    var interval = 0,
        currentElement = 1,
        rotateGears = function () {
            var degrees = 0,
                negativeDegrees,
                gear1 = $('#gear-1'),
                gear2 = $('#gear-2');
            setInterval(function () {
                gear1.css("transform" , "rotate(" + degrees + "deg)");
                /* Opera, Chrome, and Safari */
                gear1.css("WebkitTransform" , "rotate(" + degrees + "deg)");
                /* IE 9 */
                gear1.css("msTransform" , "rotate(" + degrees + "deg)");
                //secound Gear
                gear2.css("transform" , "rotate(" + negativeDegrees + "deg)");
                /* Opera, Chrome, and Safari */
                gear2.css("WebkitTransform" , "rotate(" + negativeDegrees + "deg)");
                /* IE 9 */
                gear2.css("msTransform" , "rotate(" + negativeDegrees + "deg)");
                degrees = (degrees === 355)? 0: degrees + 5;
                negativeDegrees = degrees * (-1);
            },50);
        },
        showLap = function (element) {
            $('#laptop-' + element).fadeIn(500);
        },
        hideLap = function (element) {
            $('#laptop-' + element).css('display','none');
        },
        focusBox = function (element) {
                element.find('div').delay(300)
                    .fadeIn(300).promise().done(function () {
                        var opacity = 0.0,
                            forwards = true,
                            intervalInterval,
                            interval = function  () {
                                if(forwards) {
                                    opacity = (0.3 + opacity);
                                    if(opacity >= 1) {
                                        forwards = false;
                                    }
                                } else {
                                    opacity = (opacity - 0.1);
                                    if(opacity < 0) {
                                        clearInterval(intervalInterval);
                                        this.fadeOut(300);
                                    }
                                }
                                this.css('background-color', 'rgba(128,0,128, '+ opacity + ')');
                            }.bind(this);
                        intervalInterval = setInterval(interval, 20);
                    });
        },
        ltSlides = function () {
            var lastSlide = $('#flow-' + currentElement);
            focusBox(lastSlide);
            interval = setInterval(function() {
                lastSlide.animate({
                    bottom:'100%'
                }, 500);
                currentElement = (currentElement === 4)? 1: currentElement + 1;
                lastSlide = $('#flow-' + currentElement);
                lastSlide.css('bottom','-100%').animate({
                    bottom:'0'
                }, 500);
                focusBox(lastSlide);
            },1500);
        },
        addSmartPhoneAds = function (){
            $('.no-nonsense').fadeIn(500).find('img').delay(500).animate({
                width: '175px'
            }).fadeIn(500);
        },
        removeSmartPhoneAds = function (){
            $('.no-nonsense').css('display', 'none').find('img').css({
                display: 'none',
                width:'150px'
            });
        },
        transitionWithFlash = function () {
            var i = 1,
                changeSlide = function () {
                    var aux = $('#flash-' + i);
                    i = (i === 4)? 1 :i + 1;
                    $('#flash-' + i).css('display', 'block').animate({
                        opacity: '1'
                    });
                    aux.css({
                        display:'none',
                        opacity:'0.5'
                    });
                    focusBox();
            };
            setInterval(changeSlide, 2000);
        };
    $('#pages').onepage_scroll({
        sectionContainer: 'section',
        easing: 'ease',
        animationTime: 1000,
        pagination: true,
        updateURL: false,
        beforeMove: function(index) {
        },
        afterMove: function(index) {
            if(index === 2) {
                showLap(1);
            } else {
                hideLap(1);
            }
            if(index === 3) {
                rotateGears();
            }
            if(index === 4) {
                showLap(2);
                ltSlides();
            } else if (interval) {
                clearInterval(interval);
                hideLap(2);
            }
            if(index === 6){
                transitionWithFlash();
            } else {

            }
            if(index === 7) {
                addSmartPhoneAds();
            } else {
                removeSmartPhoneAds();
            }
        },
        loop: false,
        keyboard: true,
        responsiveFallback: false,
        direction: 'vertical'
    });



    $('.change-slide').click(function () {
        $('#pages').moveDown();
    });
    $('.mask-next').mouseenter(function () {
        $('.mask').css('background-position-y', '-13px');
    });
    $('.mask-next').mouseleave(function () {
        $('.mask').removeAttr('style');
    });

}(jQuery));















//
/*
$(function(){
    var currentScroll = 0,
        slideCount = 1,
        nextScroll,
        timeOut = false,
        animate = function () {
            console.log($('#index-' + slideCount));
            $('html, body').animate({ scrollTop: $('#index-' + slideCount).offset().top}, 1000);

        }
    $(document).on('scrollstart',function(e){
        if(timeOut){
            return;
        }
        timeOut = true;
        nextScroll = $(this).scrollTop();
        console.log(currentScroll + ' '+ nextScroll + ' start');
        if (nextScroll > currentScroll) {
            console.log('down');
            slideCount = slideCount + 1;
        } else if(nextScroll === currentScroll) {
            console.log('up');
            slideCount = slideCount - 1;
        }
        animate();
    });
    $(document).on('scrollstop',function(){
        setTimeout(function (){

            timeOut = false;
            currentScroll = nextScroll;

        }, 1000);
        console.log(currentScroll + ' '+ nextScroll + ' stop');

    });

});
*/