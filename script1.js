const m = document.getElementById('mass');
const selectedP = document.getElementById('selectedPlanet');
const pImage = document.getElementById('myImage');
const planet = document.getElementById('planet');

const calc = document.getElementById('calculate');
const result = document.getElementById('result');

const rltGravity = {
    mercury: 0.38,
    venus: 0.91,
    earth: 1.00,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
    pluto: 0.06,
    moon: 0.165,
}



let calculate = () => {
    const mass = m.value;
    const selectedPlanet = selectedP.value;
    
    if (selectedPlanet === "none") {
        pImage.src='./images/earth.png'
        document.getElementById('desc').style.display = "none";
    }
    // for (const [key, value] of Object.entries(rltGravity)) {
    //     console.log(`${key}: ${value}`);
    //     if (`selectedPlanet === ${key}`) {
    //         pImage.src = `./images/${key}.png`;
    //         planet.innerText = `${key}`;
    //         const res = (mass * `${value}`).toFixed(2);
    //         result.innerText = res + " N"; 
    //     }
    // }
    Object.entries(rltGravity).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        if (selectedPlanet === key) {
            pImage.src = `./images/key.png`;
            planet.innerText = key;
            const res = (mass * value).toFixed(2);
            result.innerText = res + " N"; 
        }
        break;
    });
    
}


// Event Listeners
selectedP.addEventListener('change', calculate);
m.addEventListener('input', calculate);

calc.addEventListener('click', () => {
    calculate();
} )

calculate();




