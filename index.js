let nivel = 0;
let started = false;
let coloresBotones = ["red", "blue","green","yellow"];
let patronDeJuego = [];
let patronDeUsuario = [];



$(document).keydown(function (tecla) {
    if (tecla.keyCode === 65 && started === false ){
            $("#level-title").text("Level " + nivel);
            siguienteSecuencia();
            started = true
         }
        });

        


function siguienteSecuencia(){
    patronDeUsuario = [];
    nivel++;
    $("#level-title").text("Nivel " + nivel)
    let numeroRandom = Math.floor(Math.random() * 4);
    let colorElegidoRandom = coloresBotones[numeroRandom];
    patronDeJuego.push(colorElegidoRandom);
    animacion(colorElegidoRandom);
    sonido(colorElegidoRandom);
    
    
}


function animacion(colorActual) {
    $("#" + colorActual ).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#" + colorActual ).addClass("pressed");
    setTimeout(function() {
        $("#" + colorActual ).removeClass("pressed");
        }, 100);
    
}


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
   
    audiogreen.play();
    patronDeUsuario.push('green');
  
}
const pulseRed = () => {
    audiored.play();
    patronDeUsuario.push('red');
   
}
const pulseYellow = () => {
    audioyellow.play();
    patronDeUsuario.push('yellow');
    
}
const pulseBlue = () => {
    
    audioblue.play();
    patronDeUsuario.push('blue');
}

console.log(patronDeUsuario);

green.addEventListener('click', pulseGreen);
red.addEventListener('click', pulseRed);
yellow.addEventListener('click', pulseYellow);
blue.addEventListener('click', pulseBlue);


function sonido(nombre){
    let audio = new Audio("sounds/" + nombre + ".mp3");
    audio.play();
}


