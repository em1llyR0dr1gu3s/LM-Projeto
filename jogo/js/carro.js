//posição carros
// let xCarros = 330;
// let xCarros2 = 600;
// let xCarros3 = 500;
let xCarros =[700, 700, 700, 700, 700, 700]
let yCarros =[40, 100, 150, 210, 260, 320]
let velocidadeCarros = [2, 4, 6, 8, 10, 12]

let comprimentoCarros = 30;
let alturaCarros = 30;

function mostrarCarros() {
    for (let i = 0; i < imagensCarros.length; i++) {
    
    image(imagensCarros[i], xCarros[i], yCarros[i], 55, 40);    
    }
    // image(imagemDoCarro1, xCarros, 40, comprimentoCarros, alturaCarros);
    // image(imagemDoCarro2, xCarros2, 95, 40, 40);
    // image(imagemDoCarro3, xCarros3, 145, 40, 40);    
}

//movimento carros
function movimentoCarro() {

    for (let i = 0; i < imagensCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];

        if (xCarros[i] < -comprimentoCarros) {
            xCarros[i] = width;
        }
        
    }

}
