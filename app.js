const SUPABASE_URL =
"https://vowwskyunrwiiajvyxeh.supabase.co";

const SUPABASE_KEY =
"sb_publishable_ICegOxQ7kX1AYyIL1beq7Q_-bXBPefy";

const supabase =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);


// Theme

const themeBtn =
document.getElementById("themeBtn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
themeBtn.innerHTML="☀️";
}else{
localStorage.setItem("theme","light");
themeBtn.innerHTML="🌙";
}

});

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
themeBtn.innerHTML="☀️";
}

}


// Images

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

if(naamSelect){

naamSelect.addEventListener("change",()=>{

deityImage.src =
deityImages[naamSelect.value];

localStorage.setItem(
"selectedDeity",
naamSelect.value
);

});

const savedDeity =
localStorage.getItem("selectedDeity");

if(savedDeity){

naamSelect.value =
savedDeity;

deityImage.src =
deityImages[savedDeity];

}

}


// Start Jap

const startBtn =
document.querySelector(".start-btn");

if(startBtn){

startBtn.addEventListener("click",()=>{

localStorage.setItem(
"selectedDeity",
naamSelect.value
);

window.location.href =
"jap.html";

});

}


// LIVE STATS

async function loadStats(){

const { data } =
await supabase
.from("jap_stats")
.select("*")
.eq("id",1)
.single();

if(!data) return;

const statNumbers =
document.querySelectorAll(".stat-number");

if(statNumbers.length >= 2){

statNumbers[0].innerText =
data.active_users.toLocaleString();

statNumbers[1].innerText =
data.total_jap.toLocaleString();

}

}

loadStats();


// REALTIME

supabase
.channel("jap-live")
.on(
"postgres_changes",
{
event:"UPDATE",
schema:"public",
table:"jap_stats"
},
payload=>{

const statNumbers =
document.querySelectorAll(".stat-number");

if(statNumbers.length >= 2){

statNumbers[0].innerText =
payload.new.active_users.toLocaleString();

statNumbers[1].innerText =
payload.new.total_jap.toLocaleString();

}

}
)
.subscribe();
