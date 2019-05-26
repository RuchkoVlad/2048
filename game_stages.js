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

function loseChecking() {

    // let freeCellsCheck = true;
    // let nextCell = true;
    // let lose = false;
    //
    // if (getAmountFreeCells().length === 0) {
    //     freeCellsCheck = false;
    // }
    // for (let i = 1; i < fields.length; i++) {
    //     for (let j = 1; j < fields.length; j++) {
    //
    //         let currentPosition = fields[i][j];
    //
    //         if (currentPosition !== fields[i][j - 1] && currentPosition !== fields[i - 1][j] &&
    //             currentPosition !== fields[i][j + 1] && currentPosition !== fields[i + 1][j]) {
    //             nextCell = false;
    //         }
    //     }
    // }
    //
    // if (!freeCellsCheck && !nextCell) {
    //     lose = true;
    // }
    // return lose;

}
