/**
 * Created by arobles on 8/11/14.
 */
(function () {
    var slide_3Change = (function() {
        var executed = false,
            intervalSlide9,
            demoElements = ['#demo-part-1', '#demo-part-2'],
            elements_9 =[$(demoElements[0]), $(demoElements[1])],
            idElement = 0,
            fadeIn_ = function (){
                idElement = (idElement + 1) % elements_9.length;
                elements_9[idElement].fadeIn(300);
            },
            fadeOut_ = function () {
                elements_9[idElement].fadeOut(300).promise().done(fadeIn_);
            };
        return{
            start: function () {
                if (!executed) {
                    executed = true;
                    intervalSlide9 = setInterval(fadeOut_, 3000);
                }
            },
            stop:  function () {
                clearInterval(intervalSlide9);
                $(demoElements[0] + ' , ' + demoElements[1]).css('display','');
                executed = false;
            }
        }
        }()),
        largerQuestion = function () {
            $('#entire-question').css('display','inline');
        },
        shortQuestion = function () {
            $('#entire-question').css('display','none');
        },
        extractWidth = function () {
            var width = $(window).width();
            if( 767 >= width) {
                slide_3Change.start();
                shortQuestion();
            } else {
                slide_3Change.stop();
                largerQuestion();
            }
        };
    $(window).resize(extractWidth);
    $(document).ready(extractWidth);
}());
