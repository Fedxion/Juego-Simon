let nivel = 0;
let started = false;
let coloresBotones = ["red", "blue","green","yellow"];
let patronDeJuego = [];
let patronDeUsuario = [];



$(document).keydown(function (tecla) {
    if (tecla.keyCode === 65 && started === false ){
            $("#level-title").text("Level " + nivel);
            siguienteSecuencia();
            started = true;
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

const pulseGreen = () => {
    audiogreen.play();


}
const pulseRed = () => {
    audiored.play();

}
const pulseYellow = () => {
    audioyellow.play();
    
}
const pulseBlue = () => {
    audioblue.play();
    
}

green.addEventListener('click',  function(){
    pulseGreen();
    patronDeUsuario.push("green");
    controlRespuesta(patronDeUsuario.length-1);

} );
red.addEventListener('click',function(){
    pulseRed();
    patronDeUsuario.push("red");  
    controlRespuesta(patronDeUsuario.length-1);
} );
yellow.addEventListener('click', function(){
    pulseYellow();
    patronDeUsuario.push("yellow");
    controlRespuesta(patronDeUsuario.length-1);
});
blue.addEventListener('click', function(){
    pulseBlue();
    patronDeUsuario.push("blue");
    controlRespuesta(patronDeUsuario.length-1);
});


function sonido(nombre){
    let audio = new Audio("sounds/" + nombre + ".mp3");
    audio.play();
}


function controlRespuesta(actualNivel){

    if (patronDeJuego[actualNivel] === patronDeUsuario[actualNivel] ) {
        console.log("Success")
        if (patronDeUsuario.length === patronDeJuego.length){
            setTimeout(function(){
                siguienteSecuencia();
            }, 1000);
        }
    }else{
        let wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        console.log("wrong")
        $("#level-title").text('Game Over, Presiona la Tecla A para comenzar de nuevo');
        $("body").addClass("game-over");
        setTimeout(function() {
         $("body").removeClass("game-over");
        }, 200);
        empezarDeNuevo();

    }

}

function empezarDeNuevo(){
    nivel = 0;
    patronDeJuego = [];
    started = false;
}