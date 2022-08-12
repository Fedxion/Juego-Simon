let level = 0;
let started = false;



$(document).keydown(function (tecla) {
    if (tecla.keyCode === 65 && started === false ){
            $("#level-title").text("Level " + level);
            started = true
         }
        });