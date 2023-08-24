
//a função setup define as config de largura e altura
function setup() {

    createCanvas(700, 400)

}

// a função draw define o que sera exibido
function draw() {

    background(imagemDaEstrada);
    //image permite manipular o eixo X e Y como tambem W e H
    mostrarMascote();
    mostrarCarros();
    movimentoCarro();
    movimentoMascote();
    incluirPontos();
}

