'use strict';


function start() {

    fields = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    score = 0;

    addNewNumberForFreePlace();
    addNewNumberForFreePlace();
    render();
}

function winRendering() {
    console.log('You WIN!');
}

function loseRendering() {
    console.log('Sorry, You lose!');
}

