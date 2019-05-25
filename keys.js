'use strict';


document.addEventListener("keyup", function (event) {
    if (event.keyCode === 39) {
        makeStep('right');
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 37) {
        makeStep('left');
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        makeStep('top');
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 40) {
        makeStep('down');
    }

    document.addEventListener('click', function () {
        if (document.querySelector('.new_game'))    {
            start();
        }
    })
});
