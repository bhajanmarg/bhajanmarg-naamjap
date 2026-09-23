// ======================
// BHAGWAN IMAGES
// ======================

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

// ======================
// DARK MODE
// ======================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = "☀️";
  }

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeBtn.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeBtn.innerHTML = "🌙";
    }

  });

}

// ======================
// HOME PAGE
// ======================

const deityImage =
document.getElementById("deityImage");

const naamSelect =
document.getElementById("naamSelect");

if (deityImage && naamSelect) {

  const savedDeity =
  localStorage.getItem("selectedDeity");

  if (savedDeity && deityImages[savedDeity]) {

    naamSelect.value = savedDeity;

    deityImage.src =
    deityImages[savedDeity];

  }

  naamSelect.addEventListener("change", () => {

    const selected =
    naamSelect.value;

    deityImage.src =
    deityImages[selected];

    localStorage.setItem(
      "selectedDeity",
      selected
    );

  });

}

// ======================
// START JAP BUTTON
// ======================

const startBtn =
document.querySelector(".start-btn");

if (startBtn && naamSelect) {

  startBtn.addEventListener("click", () => {

    localStorage.setItem(
      "selectedDeity",
      naamSelect.value
    );

    window.location.href =
    "jap.html";

  });

}

// ======================
// DEMO STATS
// ======================

const statNumbers =
document.querySelectorAll(".stat-number");

if (statNumbers.length >= 2) {

  statNumbers[0].innerText = "108";

  statNumbers[1].innerText = "1008";

}
