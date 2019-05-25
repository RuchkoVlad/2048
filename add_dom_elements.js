'use strict';

function render() {

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

let win = () => {
    document.querySelector('.field').innerHTML = `<div class="win_wrapper">  
                                                                            <span class="win">ПОБЕДА!<br>
                                                                                <img src="https://img.icons8.com/dusk/64/000000/trophy.png" alt="prize">
                                                                            </span>
                                                                       </div>`;
};
