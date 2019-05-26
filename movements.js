'use strict';

let fields = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

let score = 0;

start();

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
        render();
    }
    winRendering();
    loseChecking();
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
        render();
    }
    winRendering();
    loseChecking();
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
        render();
    }
    winRendering();
    loseChecking();
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
        render();
    }
    winRendering();
    loseChecking();
    document.querySelector('.cell').classList.remove('animation');
}


