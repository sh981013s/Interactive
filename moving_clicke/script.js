"use strict";

// 하나하나 add event

// (function() {
//     const ilbuniGroup = document.querySelectorAll('.ilbuni');
//     const stage = document.querySelector('.stage');

//     function clickHandler(e) {
//         // stage.removeChild(this);
//         this.parentNode.removeChild(this);
//     }

//     for(let i = 0; i < ilbuniGroup.length; i++) {
//         ilbuniGroup[i].addEventListener('click', clickHandler);
//     }
// })();

// 부모에게 이벤트 위임

(function() {
    const stage = document.querySelector('.stage');

    function clickHandler(e) {
        if (e.target.classList.contains('ilbuni')) {
            stage.removeChild(e.target);
        }
    }

    stage.addEventListener('click', clickHandler);
})();