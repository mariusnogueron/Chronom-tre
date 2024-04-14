const startButton = document.getElementById('btn-start')
let isStartButtonClicked = false;
const stopButton = document.getElementById('btn-stop')
const reset = document.getElementById('btn-reset')
let span = document.querySelectorAll("span")
var t
let minutes = 0;
let secondes = 0;
let millisecondes = 0;

function chrono() {

    millisecondes+=1;
    if (millisecondes == 10) {
        millisecondes = 0
        secondes += 1
    }
    if (secondes == 60) {
        secondes = 0
        minutes += 1
    }
    if (minutes == 60) {
        console.log("faut peut être arrêter le chrono");
    }
    span[0].innerHTML = minutes + "min"
    span[1].innerHTML = secondes + "sec"
    span[2].innerHTML = millisecondes + "mil"
} 


 
startButton.addEventListener("click", () => {
    if (!isStartButtonClicked) {
        t = setInterval(chrono, 100);
        isStartButtonClicked = true;
    } else {
        console.log("arrête de cliquer, c'est déjà en route :(");
    }
});

stopButton.addEventListener("click", () => {
    clearInterval(t);
    isStartButtonClicked = false;

});

reset.addEventListener("click", () => { 
    clearInterval(t);
    isStartButtonClicked = false;
    millisecondes = 0
    secondes = 0
    minutes = 0
    span[0].innerHTML = "0min"
    span[1].innerHTML = "0sec"
    span[2].innerHTML = "0mil"
});




// Faire défiler le minuteur
// Faire en sorte que lorsque les secondes arrivent à 60n on reset et passe à la minute suivante.
// lancer le minuteur avec start uniquement. Si on appuie alors que le minuteur est déjà lancé, alors on ne fait rien
// vérifier si le minuteur est lancé est si c'est le cas, l'arrêter
// reset le minuteur si celui-ci n'est pas à 0
