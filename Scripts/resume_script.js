$(window).on("load", function() {
    $(".loader").fadeOut(250);
    $(".loader_container").delay(250).fadeOut(250);
});

$(document).ready(function() {
    $(".navigation a").mouseover(function() {
        $(this).find("li").css({'font-weight': 700, 'text-shadow': '0px 0px 6px #ffffff'})
    });

    $(".navigation a").mouseout(function() {
        $(this).find("li").css({'font-weight': 400, 'text-shadow': '2px 2px 3px #000000'})
    });
});