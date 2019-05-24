'use strict';

let fields = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

let score = 0;


//looking for free cells and count
function getAmountFreeCells() {
    let count = 0;

    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[i].length; j++) {
            if (fields[i][j] === 0) {
                count++;
            }
        }
    }
        return count;
}

// put new random number into free cells
function addNewNumberForFreePlace() {
    const count = getAmountFreeCells();
    const randomPosition = randomNumberPlace(1, count);
    let currentFreeCellAmount = 0;

    for (let i = 0; i < fields.length; i++) {
        for (let j = 0; j < fields[i].length; j++) {
            if (fields[i][j] === 0) {
                currentFreeCellAmount++;
            }
            if (currentFreeCellAmount === randomPosition) {
                fields[i][j] = 2;
                break;
            }
        }
    }
}

//just random
function randomNumberPlace(min, max) {
    const rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

//block for move
function moveLeft() {
    let flagStep = false;
    for (let i = 0; i < fields.length; i++) {
        let flagMerge = false;
        let numberPosition = 1;
        while (numberPosition <= 3) {
            if (fields[i][numberPosition] === 0) {
                numberPosition++;
            } else if (numberPosition > 0 && fields[i][numberPosition - 1] === fields[i][numberPosition] && !flagMerge) {
                fields[i][numberPosition - 1] *= 2;
                fields[i][numberPosition] = 0;
                flagMerge = true;
                flagStep = true;
                score += fields[i][numberPosition - 1];
                numberPosition++;
            } else if (numberPosition > 0 && fields[i][numberPosition - 1] === 0) {
                fields[i][numberPosition - 1] = fields[i][numberPosition];
                fields[i][numberPosition] = 0;
                flagStep = true;
                numberPosition--;
            } else if (numberPosition > 0 && flagMerge && fields[i][numberPosition - 1] !== 0) {
                numberPosition++;
                flagMerge = false;
            } else {
                numberPosition++;
            }
        }
    }
    if (flagStep) {
        addNewNumberForFreePlace();
        rander();
    }
}

function moveRight() {
    let flagStep = false;
    for (let i = 0; i < fields.length; i++) {
        let flagMerge = false;
        let numberPosition = 2;
        while (numberPosition >= 0) {
            if (fields[i][numberPosition] === 0) {
                numberPosition--;
            } else if (numberPosition < 3 && fields[i][numberPosition + 1] === fields[i][numberPosition] && !flagMerge) {
                fields[i][numberPosition + 1] *= 2;
                fields[i][numberPosition] = 0;
                flagMerge = true;
                flagStep = true;
                score += fields[i][numberPosition + 1];
                numberPosition--;
            } else if (numberPosition < 3 && fields[i][numberPosition + 1] === 0) {
                fields[i][numberPosition + 1] = fields[i][numberPosition];
                fields[i][numberPosition] = 0;
                flagStep = true;
                numberPosition++;
            } else if (numberPosition < 3 && flagMerge && fields[i][numberPosition + 1] !== 0) {
                numberPosition--;
                flagMerge = false;
            } else {
                numberPosition--;
            }
        }
    }
    if (flagStep) {
        addNewNumberForFreePlace();
        rander();
    }
}

function moveDown() {
    let flagStep = false;
    for (let i = 0; i < fields.length; i++) {
        let flagMerge = false;
        let numberPosition = 2;
        while (numberPosition >= 0) {
            if (fields[numberPosition][i] === 0) {
                numberPosition--;
            } else if (numberPosition < 3 && fields[numberPosition + 1][i] === fields[numberPosition][i] && !flagMerge) {
                fields[numberPosition + 1][i] *= 2;
                fields[numberPosition][i] = 0;
                flagMerge = true;
                flagStep = true;
                score += fields[numberPosition + 1][i];
                numberPosition--;
            } else if (numberPosition < 3 && fields[numberPosition + 1][i] === 0) {
                fields[numberPosition + 1][i] = fields[numberPosition][i];
                fields[numberPosition][i] = 0;
                flagStep = true;
                numberPosition++;
            } else if (numberPosition < 3 && flagMerge && fields[numberPosition + 1][i] !== 0) {
                numberPosition--;
                flagMerge = false;
            } else {
                numberPosition--;
            }
        }
    }
    if (flagStep) {
        addNewNumberForFreePlace();
        rander();
    }
}

function moveTop() {
    let flagStep = false;
    for (let i = 0; i < fields.length; i++) {
        let flagMerge = false;
        let numberPosition = 1;
        while (numberPosition <= 3) {
            if (fields[numberPosition][i] === 0) {
                numberPosition++;
            } else if (numberPosition > 0 && fields[numberPosition - 1][i] === fields[numberPosition][i] && !flagMerge) {
                fields[numberPosition - 1][i] *= 2;
                fields[numberPosition][i] = 0;
                flagMerge = true;
                flagStep = true;
                score += fields[numberPosition - 1][i];
                numberPosition++;
            } else if (numberPosition > 0 && fields[numberPosition - 1][i] === 0) {
                fields[numberPosition - 1][i] = fields[numberPosition][i];
                fields[numberPosition][i] = 0;
                flagStep = true;
                numberPosition--;
            } else if (numberPosition > 0 && flagMerge && fields[numberPosition - 1][i] !== 0) {
                numberPosition++;
                flagMerge = false;
            } else {
                numberPosition++;
            }
        }
    }
    if (flagStep) {
        addNewNumberForFreePlace();
        rander();
    }
}

// for users command
function makeStep(type) {

    switch (type) {
        case 'left':
            moveLeft();
            break;
        case 'right':
            moveRight();
            break;
        case 'top':
            moveTop();
            break;
        case 'down':
            moveDown();
            break;
    }
}

//restart
function restartingGame() {
    fields = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    addNewNumberForFreePlace();
    addNewNumberForFreePlace();
}

function winRendering() {
    console.log('You WIN!');
}

function loseRendering() {
    console.log('Sorry, You lose!');
}

addNewNumberForFreePlace();
addNewNumberForFreePlace();
rander();

