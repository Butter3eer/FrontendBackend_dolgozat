const urlInput = document.getElementById("urlInput");
const szelessegInput = document.getElementById("szelessegInput");
const vastagsagInput = document.getElementById("vastagsagInput");
const szinInput = document.getElementById("szinInput");
const kep = document.getElementById("kepHelye");
const temaButton = document.getElementById("temaButton");

urlInput.addEventListener("keyup", function () {
  init();
});

szelessegInput.addEventListener("input", function () {
  init();
});

vastagsagInput.addEventListener("input", function () {
  init();
});

szinInput.addEventListener("input", function () {
  init();
});

temaButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});


function kepValtoztatas(kep, url, szelesseg, vastagsag, szin) {
  kep.style.border = "0px solid black";
  kep.src = "";
  kep.style.width = szelesseg;
  kep.style.borderWidth = vastagsag;
  kep.style.borderColor = szin;
  kep.src = url;
  kep.style.width = szelesseg;
  kep.style.borderWidth = vastagsag;
  kep.style.borderColor = szin;
}

function init() {
  const url = document.getElementById("urlInput").value;
  const szelesseg = document.getElementById("szelessegInput").value;
  const vastagsag = document.getElementById("vastagsagInput").value;
  const szin = document.getElementById("szinInput").value;

  kepValtoztatas(kep, url, szelesseg, vastagsag, szin);
}