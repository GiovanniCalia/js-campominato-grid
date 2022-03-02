const eleText = document.getElementById("text");
const btnPlay = document.getElementById("play");
let areaBoxesEasy = document.getElementById("container-easy");
let areaBoxesMedium = document.getElementById("container-medium");
let areaBoxesHard = document.getElementById("container-hard");
const btnEasy = document.getElementById("easy");
const btnMedium = document.getElementById("medium");
const btnHard = document.getElementById("hard");

for (i = 1; i <= 100; i++){
    areaBoxesEasy.innerHTML += `<div class="box">${i}</div>`;
    console.log(areaBoxesEasy);
}

for (i = 1; i <= 81; i++){
    areaBoxesMedium.innerHTML += `<div class="box">${i}</div>`;
    console.log(areaBoxesMedium);
    areaBoxesMedium.style.display = "none";
}

for (i = 1; i <= 49; i++){
    areaBoxesHard.innerHTML += `<div class="box">${i}</div>`;
    console.log(areaBoxesHard);
    areaBoxesHard.style.display = "none";
}

let found = false;
btnPlay.addEventListener("click", function(){ 
    if (areaBoxesMedium.style.display = "flex"){
        found = true;
    } 
})
