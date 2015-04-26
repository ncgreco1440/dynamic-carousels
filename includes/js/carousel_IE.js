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
        var trans = $('.carousel').data('translate');
        var rotation = 0;
        var count = 0;
        $(".carouselImgs").each(function () {
            if (count === 0) {
                rotation = 0;
            } else {
                rotation = rotation + angle;
            }
            var nxtStep = rotation + angle;
//            $(this).css({
//                    transform: 'rotateY(' + nxtStep + 'deg)' //+
//                    //'translateZ(' + translate + 'px)'
//                });
            //$(this).transition({z: translate + 'px'});
            //$(this).transition({rotateY: nxtStep +'deg'});
//            $(this).css({
//                //transform: 'rotateY(' + nxtStep +'deg) translateZ(' + trans +'px)'
//                //transform: 'translateZ(' + translate +'px)'
//                transform: 'rotateY(' + nxtStep +'deg)' //+ 'translateZ(' + translate +'px)'
//            });
//            $(this).css({
//                transform: 'translateZ(180px)'
//            });
            count++;
//            $({deg: rotation}).animate({deg: nxtStep}, {
//                duration: 1000,
//                easing: "swing",
//                step: function (now) {
//                    // in the step-callback (that is fired each step of the animation),
//                    // you can use the `now` paramter which contains the current
//                    // animation-position (`0` up to `angle`)
//                    $(this).css({
//                        transform: 'rotateY(' + now + 'deg) translateZ(' + translate + 'px)'
//                    });
//                }
//            });
        });
    };
    //console.log(index);
    //console.log("This angle is: " + rotation);
    //$(this).css({transform: 'rotateY(' + nxtStep +'deg) translateZ(' + translate + '323px)'});
//            var style = window.getComputedStyle(this);
//            var initTransform = style.getPropertyValue('transform') || 
//                    style.getPropertyValue('-webkit-transform');
//            console.log(initTransform);
//            var matrix = new MsCSSMatrix(initTransform) || 
//                         new CSSMatrix(initTransform);
//            var initY = Math.asin(matrix.b);
//            initY *= 180/Math.PI;
//            console.log(initY);
//            var computedStyle = window.getComputedStyle(this, null);
//            var matrix = computedStyle.getPropertyValue('transform');
//            var values=matrix.split('(')[1].split(')')[0].split(',');
//            var sinB=parseFloat(values[8]);
//            var b=Math.floor(Math.asin(sinB)*(180/Math.PI));
//            var cosB=Math.cos(b*Math.PI/180);
//            var matrixVal10=parseFloat(values[9]);
//            var a=Math.round(Math.asin(-matrixVal10/cosB)*180/Math.PI);
//            var matrixVal1=parseFloat(values[0]);
//            var c=Math.round(Math.acos(matrixVal1/cosB)*180/Math.PI);
    //console.log(values);
    //console.log(sinB);
//            console.log(values);
//            console.log("rotateX: " + a + "  " + "rotateY: " + b + "  " + "rotateZ: " + c + "  ");
//            $({deg: rotation}).animate({deg: nxtStep}, {
//                duration: 1000,
//                easing: "swing",
//                step: function (now) {
//                    // in the step-callback (that is fired each step of the animation),
//                    // you can use the `now` paramter which contains the current
//                    // animation-position (`0` up to `angle`)
//                    $(this).css({
//                        transform: 'rotateY(' + now + 'deg) translateZ(' + translate + 'px)'
//                    });
//                }
//            });
//        });
//    };
    carouselAnimate();
//    timer = setInterval(carouselAnimate, 1000);
//    $('.carousel').hover(function (ev) {
//        clearInterval(timer);
//    }, function (ev) {
//        timer = setInterval(carouselAnimate, 1000);
//    });

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
                $('.carouselImgs').css({
                    transform: 'rotateY(' + now + 'deg)' + 'translateZ(323px)'
                });
            }
        });
        //$('.carousel').data('angle', rotation);
    });
    $(document).on('click', '#right', function () {
        var angle = $('.carousel').data('angle') * -1;
        var trans = $('.carousel').data('translate');
        var rotation = 0;
        var count = 0;
        $(".carouselImgs").each(function (index, value) {
            if (count === 0) {
                rotation = 0;
            } else {
                rotation = rotation + angle;
            }
            var nxtStep = rotation + angle;
            count++;
            $({deg: 0}).animate({deg: angle}, {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                    //console.log(now);
                    // in the step-callback (that is fired each step of the animation),
                    // you can use the `now` paramter which contains the current
                    // animation-position (`0` up to `angle`)
                    $(index).css({
                        transform: 'rotateY(' + now + 'deg)' + 'translateZ(323px)'
                    });
                }
            });
            //$('.carousel').data('angle', rotation);
        });
    });
});

