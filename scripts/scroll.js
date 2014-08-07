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
        showLap = function () {
            $('.center-image-laptop').fadeIn(500);
        },
        hideLap = function () {
            $('.center-image-laptop').css('display','none');
        },
        focusBox = function (element) {
            setTimeout(function () {

                element.find('div')
                    .fadeIn(1000)
                    .css({
                        'background-color':'rgb(128,0,128)'
                    })
                    .animate({
                        opacity: 1
                    },2000).resolve().promise();


            }, 1000);
        },
        ltSlides = function () {
            interval = setInterval(function() {
                var lastSlide;
                $('.flow-' + currentElement).animate({
                    bottom:'100%'
                }, 500);
                currentElement = (currentElement === 4)? 1: currentElement + 1;
                lastSlide = $('.flow-' + currentElement);
                lastSlide.css('bottom','-100%').animate({
                    bottom:'0'
                }, 500);
                focusBox(lastSlide);
            },3000);
    }

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
                showLap();
            } else {
                hideLap();
            }
            if(index === 3) {
                rotateGears();
            }
            if(index === 4) {
                showLap();
                ltSlides();
            } else if (interval) {
                clearInterval(interval);
                interval = 0;
                hideLap();
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