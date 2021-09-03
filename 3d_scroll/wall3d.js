"use strict";

(function() {

    // scroll screen handler

    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    let maxScrollValue

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function() {
        const zMove = pageYOffset / maxScrollValue * 980 - 490;
        const scrollPer = pageYOffset / maxScrollValue;

        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

        // progress bar
        barElem.style.width = scrollPer * 100 + '%';
    })

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    // status bar handler
})();