let areaBoxes = document.getElementById("container");

for (i = 1; i <= 100; i++){
    areaBoxes.innerHTML += `<div class="box">${i}</div>`;
}