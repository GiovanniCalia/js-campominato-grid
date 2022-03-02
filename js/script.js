const eleText = document.getElementById("text");
const btnPlay = document.getElementById("play");
let areaBoxes = document.getElementById("container");
const btnEasy = document.getElementById("easy");
const btnMedium = document.getElementById("medium");
const btnHard = document.getElementById("hard");


for (i = 1; i <= 100; i++){
    areaBoxes.innerHTML += `<div class="box">${i}</div>`;
}


btnPlay.addEventListener("click", function(){
    for (i = 1; i <= 100; i++){
          areaBoxes.innerHTML += `<div class="box">${i}</div>`;
       }
})
