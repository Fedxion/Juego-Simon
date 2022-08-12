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
   

}
