'use strict';


document.addEventListener("keyup", function (event) {
    if (event.keyCode === 39) {
        moveRight();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 37) {
        makeStep('left');
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        moveTop();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 40) {
        moveDown();
    }
});