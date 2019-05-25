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
    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields.length; j++) {
            if (fields[i][j] >= 2048) {
                win();
            }
        }
    }
}

// function loseRendering() {
//
//     for (let i = 0; i < fields.length ; i++) {
//         for (let j = 0; j < fields.length; j++) {
//             if(fields[i][j] !== fields[i][j + 1] && fields[i][j] !== fields[i][j - 1]
//                 && fields[i][j] !== fields[i + 1][j] && fields[i][j] !== fields[i - 1][j] && fields[i][j] !== 0){
//                 alert('Sorry, You lose!');
//             }
//         }
//     }
//
// }

