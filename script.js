document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});


$(document).ready(function () {
    $("#about-me-link").click(function (e) {
        e.preventDefault();
        var targetElement = $($(this).attr("href"));
        $("html, body").animate({
            scrollTop: targetElement.offset().top - 200
        }, 1000);
    });
});

$(document).ready(function () {
    $("#my-friends-link").click(function (e) {
        e.preventDefault();
        var targetElement = $($(this).attr("href"));
        var offset = targetElement.offset().top + 400;
        $("html, body").animate({
            scrollTop: offset
        }, 1000);
    });
});

$(document).ready(function () {
    $("#home-link").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
});

$(document).ready(function () {
    $("#contacts-link").click(function (e) {
        e.preventDefault();
        var targetElement = $($(this).attr("href"));
        $("html, body").animate({
            scrollTop: targetElement.offset().top
        }, 1000);
    });
});

