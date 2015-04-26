$(document).ready(function () {
    /*
     function AnimateRotate(angle) {
     // caching the object for performance reasons
     var $elem = $('#MyDiv2');
     
     // we use a pseudo object for the animation
     // (starts from `0` to `angle`), you can name it as you want
     $({deg: 0}).animate({deg: angle}, {
     duration: 2000,
     step: function (now) {
     // in the step-callback (that is fired each step of the animation),
     // you can use the `now` paramter which contains the current
     // animation-position (`0` up to `angle`)
     $elem.css({
     transform: 'rotate(' + now + 'deg)'
     });
     }
     });
     }*/
    carouselAnimate = function () {
        var angle = $('.carousel').data('angle');
        $({deg: 0}).animate({deg: angle}, {
            duration: 1000,
            easing: "swing",
            step: function (now) {
                // in the step-callback (that is fired each step of the animation),
                // you can use the `now` paramter which contains the current
                // animation-position (`0` up to `angle`)
                $('.carousel').css({
                    transform: 'rotateY(' + now + 'deg)'
                });
            }
        });
    };
    timer = setInterval(carouselAnimate, 6000);
    $('.carousel').hover(function (ev) {
        clearInterval(timer);
    }, function (ev) {
        timer = setInterval(carouselAnimate, 6000);
    });

    $(document).on('click', '#left', function () {
        var angle = $('.carousel').data('angle');
        //var rotation = $('.carousel').data('angle') - 40;
        $({deg: 0}).animate({deg: angle}, {
            duration: 1000,
            easing: "swing",
            step: function (now) {
                // in the step-callback (that is fired each step of the animation),
                // you can use the `now` paramter which contains the current
                // animation-position (`0` up to `angle`)
                $('.carousel').css({
                    transform: 'rotateY(' + now + 'deg)'
                });
            }
        });
        //$('.carousel').data('angle', rotation);
    });
    $(document).on('click', '#right', function () {
        var angle = $('.carousel').data('angle') * -1;
        //var rotation = $('.carousel').data('angle') + 40;
        $({deg: 0}).animate({deg: angle}, {
            duration: 1000,
            easing: "swing",
            step: function (now) {
                // in the step-callback (that is fired each step of the animation),
                // you can use the `now` paramter which contains the current
                // animation-position (`0` up to `angle`)
                $('.carousel').css({
                    transform: 'rotateY(' + now + 'deg)'
                });
            }
        });
        //$('.carousel').data('angle', rotation);
    });
});

