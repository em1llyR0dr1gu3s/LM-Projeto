//posição mascote
let yMascote = 365;
let xMascote = 70;
let meusPontos = 0;

function mostrarMascote() {
    image(imagemDoMascote, xMascote, yMascote, 30, 30);
}

function incluirPontos() {
    
    text(meusPontos, 20,25)
    fill(color(178, 32, 25))
    textSize (21)
    
    if (yMascote < 0) {
        yMascote = 407;
        meusPontos ++; 
    }
}

//movimento mascote
function movimentoMascote() {
    if (keyIsDown(UP_ARROW)) {
        
        yMascote -=5;
    }

    if (keyIsDown(DOWN_ARROW)) {

        yMascote +=5;
        
    }

    if (keyIsDown(LEFT_ARROW)) {
        
        xMascote -=5;
    }

    if (keyIsDown(RIGHT_ARROW)) {

        xMascote +=5;
        
    }
}