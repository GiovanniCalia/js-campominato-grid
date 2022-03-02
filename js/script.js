const eleText = document.getElementById("text");
const btnPlay = document.getElementById("play");
const areaBoxes = document.getElementById("container");
const btnEasy = document.getElementById("easy");
const btnMedium = document.getElementById("medium");
const btnHard = document.getElementById("hard");


for (i = 1; i <= 100; i++){
    areaBoxes.innerHTML += `<div class="box">${i}</div>`;
}

btnPlay.addEventListener("click", easy);

function easy(){
    for (i = 1; i <= 100; i++){
        areaBoxes.innerHTML += `<div class="box">${i}</div>`;
    }
}


btnPlay.addEventListener("click", medium);

function medium(){
    for (i = 1; i <= 81; i++){
        areaBoxes.innerHTML += `<div class="box">${i}</div>`;
    }
}


