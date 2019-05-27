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
// field.addEventListener('touchstart', touchstart, false);
// field.addEventListener('touchmove', touchMove, false);
// field.addEventListener('touchend', touchUp, false);
//

// let initialPoint;
// let finalPoint;
// document.addEventListener('touchstart', function(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     initialPoint=event.changedTouches[0];
// }, false);
// document.addEventListener('touchend', function(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     finalPoint=event.changedTouches[0];
//     let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
//     let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
//     if (xAbs > 20 || yAbs > 20) {
//         if (xAbs > yAbs) {
//             if (finalPoint.pageX < initialPoint.pageX){
//                 moveLeft()
//             else{
//                 moveRight()
//         }
//         else {
//             if (finalPoint.pageY < initialPoint.pageY){
//                 moveTop()
//             else{
//                moveDown()
//         }
//     }
// } false);