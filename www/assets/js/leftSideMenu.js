var main= function(){
    $('.icon-menu').click(function(){
        $('.menu1').animate({
            left: '0px'
        }, 200);
    $('#fsvs-body').animate({
        left:'25%'
    }, 200);
    });
    $('.icon-close').click(function(){
        $('.menu1').animate({
            left: "-25%"
        }, 200);
        $('#fsvs-body').animate({
            left: "0px"
        }, 200);
    });
};


$(document).ready(main);