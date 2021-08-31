(function() {
    const container = document.querySelector('.container');

    let current;

    function activate(elem) {
        elem.classList.add('door-opened');
        current = elem;
        console.log(current)
    }

    function deactivate(elem) {
        elem.classList.remove('door-opened');
    }

    function doorHandler(e) {
        const targetElem = e.target;

        if(current) {
            console.log('deactivate');
            deactivate(current);
        }

        if(targetElem.classList.contains('door-front')) {
            activate(targetElem.parentNode);
        }
    }

    container.addEventListener('click', doorHandler);

})();