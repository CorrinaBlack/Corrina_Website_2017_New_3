// ***************************************************************************************************
// ON DOCUMENT READY**********************************************************************************
// ***************************************************************************************************
$(document).ready(function () {

    // ***********************************************************************************************
    // ***********************************************************************************************
    // START WINDOW SHADE EFFECT**********************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************

    // ********************************************************************************
    // GLOBAL VARIABLE FOR LEFT POSITION OF CONTENT************************************
    // ********************************************************************************
    var posLeft;
    var posTop = 52;        // changes in relation to posTopAlt
    var posTopAlt = 914;    // changes in relation to posTop

    // ********************************************************************************
    // ONLOAD: SET BUFFER + BACK PAGE POSITION FOR WINDOW SHADE EFFECT*****************
    // ********************************************************************************
    setTimeout(function () {

        // SET BUFFER
        bufferHeight = ($(window).height() + 2);
        $('#Buffer').css('height', bufferHeight);

        // SET BACK PAGE POSITION
        if ($(window).width() > 961) {
            posLeft = ((($(window).width() - 960) / 2) + 60);
            $('#MainBodyAccelerator').css('left', posLeft);
            $('#MainBodyAccelerator').css('top', posTop);
        }
        else {
            posLeft = 60;
            $('#MainBodyAccelerator').css('left', posLeft);
            $('#MainBodyAccelerator').css('top', posTop);
        }

        // DISPLAY BACK PAGE
        $('#MainBodyAccelerator').css('display', 'block');
        

        // PREPARE FOR AND CONFIGURE SCROLLING FOR WINDOW SHADE EFFECT
        var fadeStart = 100, fadeUntil = 862, fading = $('#ParallaxBack');

        $(window).bind('scroll', function () {
            // SET OPACITY AS SCROLLING OF DARK OVERLAY ON CONTENT BELOW
            var offset = $(document).scrollTop(), opacity = 0;
            if (offset <= fadeStart) {
                opacity = 1;
            } else if (offset <= fadeUntil) {
                opacity = 1 - offset / fadeUntil;
            }
            fading.css('opacity', opacity).html(opacity);

            // SET PAGE POSITION WHEN SCROLLING - FLIP BETWEEN ABSOLUTE AND FIXED
            if ($(window).scrollTop() > 860) {
                $('#MainBodyAccelerator').css('position', 'absolute'); 
                $('#MainBodyAccelerator').css('top', posTopAlt);
                $('#MainBodyAccelerator').css('left', posLeft);
            }
            else {
                $('#MainBodyAccelerator').css('position', 'fixed');
                $('#MainBodyAccelerator').css('top', posTop);
                $('#MainBodyAccelerator').css('left', posLeft);
            }
        });
    }, 50);

    // ********************************************************************************
    // ONRESIZE: SET BUFFER + BACK PAGE POSITION FOR WINDOW SHADE EFFECT***************
    // ********************************************************************************
    $(window).resize(function () {
        // SET BUFFER
        bufferHeight = ($(window).height() + 2);
        $('#Buffer').css('height', bufferHeight);

        // SET BACK PAGE POSITION
        if ($(window).width() > 961) {
            posLeft = ((($(window).width() - 960) / 2) + 60);
            $('#MainBodyAccelerator').css('left', posLeft);
            $('#MainBodyAccelerator').css('top', posTop);
        }
        else {
            posLeft = 60;
            $('#MainBodyAccelerator').css('left', posLeft);
            $('#MainBodyAccelerator').css('top', posTop);
        }
    });

    // ***********************************************************************************************
    // ***********************************************************************************************
    // END WINDOW SHADE EFFECT************************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************




    // ***********************************************************************************************
    // ***********************************************************************************************
    // START NICE SCROLLING EFFECT********************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
    /* // SHOW SUBNAVIGATION
    setTimeout(function () {
            // SHOW SUBNAV BAR
            //if ($(window).scrollTop() > 375) {
                //$('#nav_bar').css('display', 'block').fadeIn("slow");
            //}
            //if ($(window).scrollTop() < 376) {
                // Hide Nav Bar
                //$('#nav_bar').css('display', 'none').fadeOut("slow");
            //}
        });
    }, 100);*/

    // CONFIGURE NICE SCROLLING BY ATTACHING CLICK EVENTS (DUE TO ANGULAR PARTIALS LOADING LATE)
    setTimeout(function () {
        $(document).on("click", "#scrollMe1", function () {
            $(this).niceScrollA('1');
        });
        $(document).on("click", "#scrollMe2", function () {
            $(this).niceScroll('2');
        });
        $(document).on("click", "#scrollMe3", function () {
            $(this).niceScroll('3');
        });
        $(document).on("click", "#scrollMe4", function () {
            $(this).niceScroll('4');
        });
        $(document).on("click", "#scrollMe5", function () {
            $(this).niceScroll('5');
        });
        $(document).on("click", "#scrollMe6", function () {
            $(this).niceScroll('6');
        });
        $(document).on("click", "#scrollMe", function () {
            $(this).topScroll();
        });
        $(document).on("click", "#scrollMeHelp1", function () {
            $(this).niceScrollAa('1');   // freeform html has issues at the top so this is a work around
        });
        $(document).on("click", "#scrollMeHelp2", function () {
            $(this).niceScrollAaa('2');   // freeform html has issues at the top so this is a work around
        });
        $(document).on("click", "#ArrowImg", function () {
            $(this).scrollDown();   
        });
    }, 100);

    // DO NICE SCROLLING
    $.fn.niceScrollA = function (x) {
        var y = '#scrollMe_' + x;
        $('html, body').animate({
            scrollTop: $(y).offset().top - 91
        }, 500);
    }
    $.fn.niceScroll = function (x) {
        var y = '#scrollMe_' + x;
        $('html, body').animate({
            scrollTop: $(y).offset().top - 43
        }, 500);
    }
    $.fn.topScroll = function (x) {
        $('html, body').animate({
            scrollTop: '0px'
        }, 500);
    }
    $.fn.scrollDown = function (x) {
        $('html, body').animate({
            scrollTop: '863px'
        }, 500);
    }


    // ***********************************************************************************************
    // freeform html has issues at the top so this is a work around - messy :( ***********************
    // ***********************************************************************************************
    $.fn.niceScrollAa = function (x) {
        var y = '#scrollMe_' + x;
        if ($(window).width() < 1250) {         // value must match @ media query width value
            $('html, body').animate({
                scrollTop: $(y).offset().top - 71
            }, 500);
        }
        else {
            $('html, body').animate({
                scrollTop: $(y).offset().top - 51
            }, 500);
        }
    }
    $.fn.niceScrollAaa = function (x) {
        var y = '#scrollMe_' + x;
        $('html, body').animate({
            scrollTop: $(y).offset().top - 83
        }, 500);
    }
    // ***********************************************************************************************
    // ***********************************************************************************************


    // ***********************************************************************************************
    // ***********************************************************************************************
    // END NICE SCROLLING EFFECT**********************************************************************
    // ***********************************************************************************************
    // ***********************************************************************************************
});