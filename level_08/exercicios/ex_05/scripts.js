let numSC = '500';
let numPC = '600';

incluirSC(numSC, inCluirPedido);

function incluirSC(numSC, callback) {

    setTimeout(() => {
        
        console.log(`Incluindo SC ${numSC}...`);
        
        callback(numSC);

    }, 3000);
}

function inCluirPedido(num) {

    console.log(`Usando o num SC para gerar o PC  ${num}...`);
    console.log(`Incluindo PC  ${numPC}...`);
}

