var carousel = new Carousel({
    el: "carousel",  // id of the carousel container
    infinite: false, // infinite loop
    autoplay: false, // starts the rotation automatically
    interval: 1500,  // interval between slide changes
    show: 0,      // slide to start with
    dots: true,      // show navigation dots
    arrows: true,    // show navigation arrows
    buttons: true,   // show play/stop buttons
    btnPlayText: 'Play',
    btnStopText: 'Stop',
    arrNextText: '›',
    arrPrevText: '‹'
});

carousel.initSlide();
