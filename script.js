const rltGravity = {
  mercury: 0.38,
  venus: 0.91,
  earth: 1.0,
  mars: 0.38,
  jupiter: 2.34,
  saturn: 1.06,
  uranus: 0.92,
  neptune: 1.19,
  pluto: 0.06,
  moon: 0.165,
};

function calculate() {
  document.getElementById("result").textContent =
    (document.getElementById("mass").value *
    rltGravity[document.getElementById("selectedPlanet").value]).toFixed(2)+" N";
  document.getElementById('planet').textContent = document.getElementById("selectedPlanet").value.toUpperCase();
  document.getElementById("myImage").src = `./images/${
    document.getElementById("selectedPlanet").value
  }.png`;
}

