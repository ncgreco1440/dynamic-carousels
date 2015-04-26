$(document).ready(function () {
    console.log('Main javascript File Loaded');
    
    //Switch active class on links to style nav links of the page you are on. 
    $(document).on('click', '.nav-link', function(){
        if($('.nav-link').find('.link-active')) {
            $('.nav-link').removeClass('link-active');
        }
        if(!$(this).hasClass('website-logo')) {
            $(this).addClass('link-active');
        }
    });
    
    //Responsive Nav.
    $(document).on('click', '#hamburgerMenu', function(){
        $('li.nav-link').slideDown(500).delay(2000).slideUp(500);
    });
    
    $(window).resize(function(){
        if($(window).width() >= 1172) {
            $('li.nav-link').css('display', 'inline-block');
        }else{
            $('li.nav-link').css('display', 'none');
        }
    });
   
    //Roll white div over header. 
    //$('#rollOver').hide('slide', {direction: 'right'}, 1500);
    
//
//    $(window).on("popstate", function (e) {
//        if (e.originalEvent.state !== null) {
//            loadPage(location.href);
//        }
//    });
//    $(function () {
//        $("img, a, area").click(function () {
//            history.pushState({}, '', $(this).attr("href"));
//            return false;
//        });
//    });
//    /**
//     * jQuery for smooth scrolling 
//     */
//    $('a[href*=#]:not([href=#])').click(function () {
//        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//                || location.hostname === this.hostname) {
//            var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//            if (target.length) {
//                $('html,body').animate({
//                    scrollTop: target.offset().top
//                }, 1000);
//                return false;
//            }
//        }
//    });
////Run this javascript if on Home page.
//    if ($('body').hasClass('Home')) {
//        //Init all Global variables and display: none all of them
//        $logo = $('.website-logo').hide();
//        $nav = $('#nav-bar').hide();
//        $footer = $('footer').hide();
//        $house = $('#house').hide();
//        $about = $('#about').hide();
//        $work = $('#work').hide();
//        $news = $('#news').hide();
//        $contact = $('#contact').hide();
//        ///////////////////////////////
//        //Start Home Page Initial Animations
//        ///////////////////////////////
//        animateHouse = function () {
//            setTimeout(function () {
//                $house.slideDown(1000);
//                hideHouseAddons();
//            }, 250);
//            setTimeout(function () {
//                showHouseAddons();
//            }, 1250);
////            setTimeout(function() {
////                $logo.show("slide", {
////                    direction: 'down'
////                },500);
////            },3250);
//        };
//
//        hideHouseAddons = function () {
//            $('#house--chimney').hide();
//            $('.house--window').hide();
//            $('#house--chimney').hide();
//            $('.house--door').hide();
//        };
//
//        showHouseAddons = function () {
//            //show Windows
//            $('#left-window').show('slide', {
//                direction: 'left'
//            }, 1000);
//            $('#right-window').show('slide', {
//                direction: 'right'
//            }, 1000);
//
//            //show Chimney
//            $('#house--chimney').show('slide', {
//                direction: 'down'
//            }, 2000);
//
//            //show Door
//            $('.house--door').fadeIn(3000);
//            $('#knob').hide();
//            $('#knob').show('bounce', {
//                times: 5
//            }, 1000);
//        };
//
//        /////////////////////////////////////
//        //End Home Page Initial Animations
//        /////////////////////////////////////
//
//        /////////////////////////////////////
//        //Start Display "About Me" Animations
//        /////////////////////////////////////
//        $(document).on('click', '#door', function () {
//            $(this).addClass('door--ani');
//            $house.animate({
//                opacity: '0',
//                scale: '11.0',
//                margin: '-50em 0em 0em 27em'
//            }, 1500, function () {
//                $('#houseContainer').slideUp(500);
//                setTimeout(function () {
//                    $logo.show("slide", {
//                        direction: 'right'
//                    }, 250);
//                }, 500);
//            });
//            setTimeout(function () {
//                //If not using SPA, leave below uncommented
//                //window.location.replace("about");
//                $nav.show('slide', {
//                    direction: 'up'
//                }, 250);
//                //show about(default) "page"
//                showDefault();
//            }, 2500);
//        });
//        animateHouse();
//
//        showDefault = function () {
//            $about.show();
//            var title = $about.find('h2').hide();
//            var heading = $about.find('h3').hide();
//            var content = $about.find('p').hide();
//            var portraitBrdr = $about.find('.imgBorder').hide();
//            var portrait = $about.find('img').hide();
//            $(title).show('slide', {
//                direction: 'up'
//            }, 250);
//            $(portraitBrdr).fadeIn(750);
//            $(portrait).slideDown(1000);
//            setTimeout(function () {
//                $(heading).fadeIn(750);
//            }, 1000);
//            setTimeout(function () {
//                $(content).fadeIn(1000);
//                //$footer.show();
//            }, 1500);
//        };
//
//        showAbout = function () {
//            $about.show('slide', {
//                direction: 'right'
//            });
//        };
//
//        showWork = function () {
//            $work.show('slide', {
//                direction: 'right'
//            });
//        };
//
//        showNews = function () {
//            $news.show('slide', {
//                direction: 'right'
//            });
//        };
//
//        showContact = function () {
//            $contact.show('slide', {
//                direction: 'right'
//            });
//        };
//
//        $aboutLink = $('#aboutLink');
//        $workLink = $('#workLink');
//        $newsLink = $('#newsLink');
//        $contactLink = $('#contactLink');
//
//        $aboutLink.on('click', function () {
//            clearPage();
//            setTimeout(function () {
//                showAbout();
//            }, 1000);
//        });
//        $workLink.on('click', function () {
//            clearPage();
//            showWork();
//        });
//        $newsLink.on('click', function () {
//            clearPage();
//            showNews();
//        });
//        $contactLink.on('click', function () {
//            clearPage();
//            setTimeout(function () {
//                showContact();
//            }, 1000);
//        });
//
//        clearPage = function () {
//            $about.hide('slide', {
//                direction: 'left'
//            }, 1000);
//            $work.hide('slide', {
//                direction: 'left'
//            }, 1000);
//            $news.hide('slide', {
//                direction: 'left'
//            }, 1000);
//            $contact.hide('slide', {
//                direction: 'left'
//            }, 1000);
//        };
//    };
//
//
//
//    if($('section').hasId('about')) {
//        //$('#about').css({opacity: '0'});
//        $("#about").animate({
//            opacity: '1'
//        }, 1000);
//    };;
//    
//    
//    if($('section').hasId('work')) {
//        //$('#about').css({opacity: '0'});
//        $("#work").animate({
//            opacity: '1'
//        }, 1000);
//    };
//    
//    if($('section').hasId('news')) {
//        //$('#about').css({opacity: '0'});
//        $("#news").animate({
//            opacity: '1'
//        }, 1000);
//    };
//    
//    if($('section').hasId('contact')) {
//        //$('#about').css({opacity: '0'});
//        $("#contact").animate({
//            opacity: '1'
//        }, 1000);
//    };
});