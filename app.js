const deityImage = document.getElementById("deityImage");
const naamSelect = document.getElementById("naamSelect");
const themeBtn = document.getElementById("themeBtn");

const deityImages = {
  radha: "assets/assets/radha.jpg",
  krishna: "assets/assets/krishna.jpg",
  ram: "assets/assets/ram.jpg",
  shiv: "assets/assets/shiv.jpg",
  hanuman: "assets/assets/hanuman.jpg",
  durga: "assets/assets/durga.jpg",
  ganesh: "assets/assets/ganesh.jpg",
  vishnu: "assets/assets/vishnu.jpg"
};

naamSelect.addEventListener("change", () => {
  deityImage.src = deityImages[naamSelect.value];
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeBtn.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.innerHTML = "🌙";
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.innerHTML = "☀️";
}
