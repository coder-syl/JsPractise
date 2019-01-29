window.addEventListener('scroll', function () {
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    if (top > 0) {
        document.querySelector('.toTop').style.opacity = 1;
    } else {
        document.querySelector('.toTop').style.opacity = 0;
    }
});
var scrollTop = document.querySelector('.toTop');
scrollTop.addEventListener('click', function () {
    var top = document.body.scrollTop || document.documentElement.scrollTop;

    var ax = 0;
    if (top > 0) {
        scrollTop.timer = setInterval(function () {
            if (top <= 0) {
                clearInterval(scrollTop.timer);
            } else {
                ax += 20;
                top -= ax;
                window.scrollTo(0, top);
            };
        }, 100);
    }
});