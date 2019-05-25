'use strict';

// looking for free cells and count
function getAmountFreeCells() {
    let freeCellsArray = [];

    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[i].length; j++) {
            if (fields[i][j] === 0) {
                freeCellsArray.push([i, j]);
            }
        }
    }
    return freeCellsArray;
}

// put new random number into free cells
function addNewNumberForFreePlace() {
    // debugger;
    let freeCells = getAmountFreeCells();
    const count = freeCells.length;
    const randomPosition = randomNumberPlace(0, count - 1);

    fields[freeCells[randomPosition][0]][freeCells[randomPosition][1]] = 2;
}

//just random
function randomNumberPlace(min, max) {
    const rand = min + Math.random() * (max - min);
    return Math.round(rand);
}