/**
 * Created by arobles on 8/1/14.
 */
(function ($) {
    'use strict';
    var interval = 0,
        currentElement = 1,
        colorSlideInterval,
        slideFlashInterval,
        intervalGradient,
        intervalDraw,
        idSlide_9 = 0,
        showSocialMedia = function () {
            $('.socialmedia').fadeIn(200);
        },
        hideSocialMedia = function () {
            $('.socialmedia').css('display', 'none');
        },
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
        upDownOpacity = function (reach, color) {
            var opacity = 0.0,
                forwards = true,
                intervalInterval,
                interval = function () {
                    if(forwards) {
                        opacity = (0.2 + opacity);
                        if(opacity >= reach) {
                            forwards = false;
                        }
                    } else {
                        opacity = (opacity - 0.1);
                        if(opacity < 0) {
                            clearInterval(intervalInterval);
                        }
                    }
                    this.css('background-color', 'rgba(' + color.r + ', ' +  color.g + ', ' + color.b + ', '+ opacity + ')');
                }.bind(this);
            intervalInterval = setInterval(interval, 20);
        },
        focusBox = function (element) {
                element.find('div').delay(300).fadeIn(300).promise().done(function () {
                    upDownOpacity.call(this, 1, {r:128 , g: 0, b:128 });
                    $(this).delay(320).fadeOut(300);
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
        showDevices = function () {
            $('#desktop, #tablet, #iPhone').animate({right:'0px', opacity: 1},500);
        },
        hideDevices = function () {
            $('#desktop').css({
                opacity: 0,
                right: '-70px'
            });
            $('#tablet, #iPhone').css({
                opacity: 0,
                right:'70px'
            })
        },
        transitionWithFlash = function () {
            var i = 1,
            changeSlide = function () {
                    var aux = $('#flash-' + i),
                        current;
                    i = (i === 4)? 1 :i + 1;
                    current = $('#flash-' + i);
                    current.css('display', 'block').animate({
                        opacity: '1'
                    });
                    aux.css({
                        display:'none',
                        opacity:'0.5'
                    });
                    if(i <= 3) {
                        focusBox(current);
                    }
                };
            focusBox($('#flash-1'));
            slideFlashInterval = setInterval(changeSlide, 2000);
        },
        lerp = function(a, b, u) {
            return (1 - u) * a + u * b;
        },
        gradientSlideColor = function(start, end, duration) {
            var interval = 10,
                steps = duration / interval,
                step_u = 1.0 / steps,
                u = 0.0,
                theInterval = setInterval(function() {
                    var r = parseInt(lerp(start.r, end.r, u)),
                        g = parseInt(lerp(start.g, end.g, u)),
                        b = parseInt(lerp(start.b, end.b, u)),
                        colorName = 'rgb(' + r + ',' + g + ',' + b + ')';
                    this.css('background-color', colorName);
                    u += step_u;
                    if (u >= 1.0){
                        clearInterval(theInterval)
                    }
                }.bind(this), interval);
        },
        iPadChange = function (lasIndex, index, color) {
            $('#iPad-' + index).css('display', 'block');
            var filter = $('#filter');
            upDownOpacity.call(filter, 1, color);
            $('#iPad-' + lasIndex).css('display', 'none');
        },
        handMovement = function () {
            $('#hand').animate({
                right:'10%',
                top:'0px'
            });
        },
        hideHand= function () {
            $('#hand').css({
                right:'0%',
                top:'600px'
            });
        },
        slide_9 = function () {
            var colors = [
                    {r:252, g: 55, b: 53},
                    {r:212, g: 212, b: 212},
                    {r:224, g: 174, b: 80}
                ],/*red: , silver: ,gold*/
                paragraph = ['#880000','#333', '#602575'],
                last = idSlide_9,
                slide = $('section[data-index="9"]');
            colorSlideInterval = setInterval(function () {
                idSlide_9 = (idSlide_9 + 1) % 3;
                iPadChange(last + 1, idSlide_9 + 1, colors[idSlide_9]);
                gradientSlideColor.call(slide, colors[last], colors[idSlide_9], 300);
                $('#change-color-p').css('color', paragraph[idSlide_9]);
                last = idSlide_9;
            }, 2500);
        },
        lookShow = function () {
            var element = 0;
            intervalDraw = setInterval(function () {
                $('#look-' + element).animate({
                    opacity:'0'
                },300);
                element = (element + 1) % 4;
                $('#look-' + element).animate({
                    opacity:'1'
                }, 300);
            }, 2500);
        },
        lookHide = function () {
            clearInterval(intervalDraw);
        },
        textBackgroundColor = function () {
            var colors = ['#7b4397','#fc3735', '#7b4397'],
                position = [16, 50, 84],
                changeGradient = function () {
                var aux;
                position[0] = (position[0] + 1) % 34;
                position[1] = ((position[1] + 1) % 34) + 34;
                position[2] = ((position[2] + 1) % 34) + 68;
                if(position[0] === 0) {
                    aux = colors.pop();
                    colors.unshift(aux);
                }
                $('#changeColorText').css({
                    background: '-webkit-linear-gradient(left, #7b4397 0%,' + colors[0] + ' ' + position[0] + '%, ' + colors[1] + ' ' +position[1] + '%, ' + colors[2] + ' '+ position[2] +'%, #7b4397 100%)',
                    '-webkit-background-clip': 'text'
                });
            };
            intervalGradient = setInterval(changeGradient, 50);
        },
        stopGradient = function () {
            clearInterval(intervalGradient);
        };
    $('#pages').onepage_scroll({
        sectionContainer: 'section',
        easing: 'ease',
        animationTime: 1000,
        pagination: true,
        updateURL: false,
        beforeMove: function(index) {
            console.log(index);
        },
        afterMove: function(index) {
            if(index === 1){
                showSocialMedia();
            } else if(index !== 11) {
                hideSocialMedia();
            }
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
            if(index === 5){
                showDevices();
            } else {
                hideDevices();
            }
            if(index === 6){
                transitionWithFlash();
            } else {
                clearInterval(slideFlashInterval);
            }
            if(index === 7) {
                addSmartPhoneAds();
            } else {
                removeSmartPhoneAds();
            }
            if(index === 8){
                handMovement();
            } else {
                hideHand();
            }
            if(index === 9) {
                slide_9();
            } else {
                clearInterval(colorSlideInterval);
            }
            if(index === 10){
                lookShow();
            } else {
                lookHide();
            }
            if(index === 11){
                textBackgroundColor();
                showSocialMedia();
            } else {
                stopGradient();
                if(index !== 1){
                    hideSocialMedia();
                }
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
    }).mouseleave(function () {
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