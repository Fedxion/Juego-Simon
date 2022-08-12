let level = 0;
let started = false;

let green = document.getElementById('green');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');

const audiogreen = new Audio('sounds/green.mp3');
const audiored = new Audio('sounds/red.mp3');
const audioyellow = new Audio('sounds/yellow.mp3');
const audioblue = new Audio('sounds/blue.mp3');
const audiowrong = new Audio('sounds/wrong.mp3');

$(document).keydown(function (tecla) {
    if (tecla.keyCode === 65 && started === false ){
            $("#level-title").text("Level " + level);
            started = true
         }
});

const pulseGreen = () => {
    console.log('Ejecutó');
    audiogreen.play();
    
    
}
const pulseRed = () => {
    console.log('Ejecutó');
    audiored.play();
    
}
const pulseYellow = () => {
    console.log('Ejecutó');
    audioyellow.play();
    
}
const pulseBlue = () => {
    console.log('Ejecutó');
    audioblue.play();
    
}

green.addEventListener('click', pulseGreen);
red.addEventListener('click', pulseRed);
yellow.addEventListener('click', pulseYellow);
blue.addEventListener('click', pulseBlue);


