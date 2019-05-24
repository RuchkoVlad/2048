'use strict';

function rander() {

    let html = ``;


    for (let i = 0; i < fields.length; i++) {
        for (let k = 0; k < fields.length; k++) {

            if (fields[i][k] === 0) {
                html += `<div class="cell"></div>`;
            } else {
                html += `<div class="cell cell_${fields[i][k]}">${fields[i][k]}</div>`;
            }
        }
    }
    document.querySelector('.field').innerHTML = html;
    document.querySelector('.score').innerHTML = `<span class="score_text">Счет</span> <span class="score_numbers">${score}</span>`;
}
