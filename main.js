//Declaration des bouttons
let startButton = document.getElementById("start-button")
let stopButton = document.getElementById("stop-button")
let increaseButton = document.getElementById("increase-button")
let decreaseButton = document.getElementById("decrease-button")
let refuel = document.getElementById("refuel")
let active = false
let presure = false
let maVar = 0
let roof = 5600
let enCoursDAction = false

//Declaration Vitesse et Régime
let speedNeedle = document.getElementById("speed-needle")
let speedValue = document.getElementById("speed-value")
let rpmNeedle = document.getElementById("rpm-needle")
let rpmValue = document.getElementById("rpm-value")

//DéclarationPanneau

let temp = document.getElementById("temperature-indicator")
let fuel = document.getElementById("fuel-indicator")
let km = document.getElementById("km-indicator")

//Valeurs Initiales






//AddEventListeners sur les bouttons

startButton.addEventListener("click", function startEngine(){
    alert("voiture démarée!")
    startButton.style.display = "none"
    stopButton.style.display = "flex"
    rpmValue.innerText = "1000"
    rpmNeedle.style.transform = "rotate(-180deg)"
    fuel.innerText = 50
    temp.innerText = 1
    km.innertext = 0.0
    active = true
})

stopButton.addEventListener("click", function stopEngine(){
    alert("voiture arretée")
    stopButton.style.display = "none"
    startButton.style.display = "flex"
    rpmValue.innerText = "0"
    rpmNeedle.style.transform = "rotate(-210deg)"
    fuel.innerText = "--"
    temp.innerText = 0
    km.innertext = 0.0
    active = false
})

refuel.addEventListener("click", function refuel(){
    if(active) 
    {
        fuel.innerText = 100
        km.innerText = 0.0
        // console.log("OKOK")
    }else{
        // console.log("non non")
    }
    
})

//Mouse Presure

increaseSpeed.addEventListener("mousedown", function (e) {
    if (e.button === 0) { // Clic gauche de la souris (augmentation)
      enCoursDAction = true;
      incrementer();
    } else if (e.button === 2) { // Clic droit de la souris (diminution)
      enCoursDAction = true;
      decrementer();
    }
  });
  
  decreaseSpeed.addEventListener("mouseup", function (e) {
    enCoursDAction = false;
  });


// increaseButton.addEventListener("mousedown", function increaseSpeed(){
//     presure = true
//     if(active & presure) 
//     { rpmValue = setInterval(function(){
//         while (maVar < roof) {
//             maVar ++
//             console.log(maVar) 
//             rpmValue.innerText = maVar
//         }  
//     }
        
    
  
// )}
// })

function incrementer() {
    while (enCoursDAction){
        if(maVar < 5600)
        maVar ++
        console.log(maVar)
    }
}

function decrementer(){
    while (enCoursDAction){
        if(maVar > 0){
            maVar --
            console.log(maVar)
        }else{
            enCoursDAction = false
        }
    }
}