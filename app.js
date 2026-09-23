// Theme Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
themeBtn.innerHTML = "☀️";
}else{
localStorage.setItem("theme","light");
themeBtn.innerHTML = "🌙";
}

});

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
themeBtn.innerHTML = "☀️";
}


// Deity Images

const deityImages = {

radha:"assets/assets/radha.jpg",

krishna:"assets/assets/krishna.jpg",

ram:"assets/assets/ram.jpg",

shiv:"assets/assets/shiv.jpg",

hanuman:"assets/assets/hanuman.jpg",

durga:"assets/assets/durga.jpg",

ganesh:"assets/assets/ganesh.jpg",

vishnu:"assets/assets/vishnu.jpg"

};

const deityImage =
document.getElementById("deityImage");

const naamSelect =
document.getElementById("naamSelect");

naamSelect.addEventListener("change", () => {

deityImage.src =
deityImages[naamSelect.value];

localStorage.setItem(
"selectedDeity",
naamSelect.value
);

});


// Restore Last Selected Deity

const savedDeity =
localStorage.getItem("selectedDeity");

if(savedDeity && deityImages[savedDeity]){

naamSelect.value = savedDeity;

deityImage.src =
deityImages[savedDeity];

}


// Start Jap Button

const startBtn =
document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {

localStorage.setItem(
"selectedDeity",
naamSelect.value
);

window.location.href = "jap.html";

});


// Demo Stats

const activeUsers =
Math.floor(Math.random() * 50) + 100;

const totalJap =
Math.floor(Math.random() * 50000) + 100000;

const statNumbers =
document.querySelectorAll(".stat-number");

if(statNumbers.length >= 2){

statNumbers[0].innerText =
activeUsers.toLocaleString();

statNumbers[1].innerText =
totalJap.toLocaleString();

}
