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
    let availableCell = false;
    let zeroCheck = false;
    let lose = true;

    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields.length; j++) {
            if (fields[i][j] === 0) {
                zeroCheck = true;
            }
        }
    }

    if (!zeroCheck) {
        for (let i = 0; i < fields.length; i++) {
            for (let j = 0; j < fields.length; j++) {

                let topCell = 0;
                let bottomCell = 0;

                if (fields[i - 1]) {
                    topCell = fields[i - 1][j];
                } else {
                    topCell = 1;
                }
                if (fields[i + 1]) {
                    bottomCell = fields[i + 1][j];
                } else {
                    bottomCell = 1;
                }
                let currentCell = fields[i][j];
                if (currentCell === fields[i][j - 1] || currentCell === fields[i][j + 1] || currentCell === topCell || currentCell === bottomCell) {
                    availableCell = true;
                }
            }
        }
    }
    if (zeroCheck || availableCell) {
        lose = false;
    }
    return lose;
}