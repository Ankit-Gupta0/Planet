const m = document.getElementById('mass');
const selectedP = document.getElementById('selectedPlanet');
const pImage = document.getElementById('myImage');
const planet = document.getElementById('planet');

const calc = document.getElementById('calculate');
const result = document.getElementById('result');

const rltGravity = {
    "mercury": 0.38,
    "venus": 0.91,
    "earth": 1.00,
    "mars": 0.38,
    "jupiter": 2.34,
    "saturn": 1.06,
    "uranus": 0.92,
    "neptune": 1.19,
    "pluto": 0.06,
    "moon": 0.165,
};

let calculate = () => {
    const mass = m.value;
    const selectedPlanet = selectedP.value;
    if (selectedPlanet === "none") {
        pImage.src='./images/earth.png'
        document.getElementById('desc').style.display = "none";
        
    }
    if (selectedPlanet === "mercury") {
        pImage.src = "./images/mercury.png";
        planet.innerText = "Mercury";
        const res = (mass * 0.38).toFixed(2);
        result.innerText = res + " N";
        
        
    }
    else if (selectedPlanet === "venus") {
        pImage.src = "./images/venus.png";
        planet.innerText = "Venus";
        const res = mass * 0.91;
        result.innerText = res + " N";
    }
    else if (selectedPlanet === "earth") {
        pImage.src = "./images/earth.png";
        planet.innerText = "Earth";
        const res = mass * 1.00;
        result.innerText = res + " N";
    }
    else if (selectedPlanet === "mars") {
        pImage.src = "./images/mars.png";
        planet.innerText = "Mars";
        const res = mass * 0.38;
        result.innerText = res + " N";
    }
    else if (selectedPlanet === "jupiter") {
        pImage.src = "./images/jupiter.png";
        planet.innerText = "Jupiter";
        const res = mass * 2.34;
        result.innerText = res + " N";
    }
    else if (selectedPlanet === "saturn") {
        pImage.src = "./images/saturn.png";
        planet.innerText = "Saturn";
        const res = mass * 1.06;
        result.innerText = res + " N";
    }
    else if (selectedPlanet === "uranus") {
        pImage.src = "./images/uranus.png";
        planet.innerText = "Uranus";
        const res = mass * 0.92;
        result.innerText = res + " N";
    }
    else if (selectedPlanet === "neptune") {
        pImage.src = "./images/neptune.png";
        planet.innerText = "Neptune";
        const res = mass * 1.19;
        result.innerText = res + " N";
    }
    else if (selectedPlanet === "pluto") {
        pImage.src = "./images/pluto.png";
        planet.innerText = "Pluto";
        const res = mass * 0.06;
        result.innerText = res + " N";
    }
    else if (selectedPlanet === "moon") {
        pImage.src = "./images/moon.png";
        planet.innerText = "Moon";
        const res = mass * 0.165;
        result.innerText = res + " N";
    }
    
}


// Event Listeners
selectedP.addEventListener('change', calculate);
m.addEventListener('input', calculate);

calc.addEventListener('click', () => {
    document.getElementById('desc').style.display = "block";
    calculate();
} )

calculate();




