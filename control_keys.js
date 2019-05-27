'use strict';

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 39) {
        moveRight();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 37) {
        moveLeft();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 38) {
        moveTop();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 40) {
        moveDown();
    }
});


// let field = document.querySelector('.field');
//
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            moveLeft();
        } else {
            moveRight();
        }
    } else {
        if ( yDiff > 0 ) {
           moveTop();
        } else {
           moveDown()
        }
    }

    xDown = null;
    yDown = null;
}