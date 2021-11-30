let elementoP = document.querySelector('p');

let valor = 0;

function incrementa() {
    atualizaTela(valor += 1);
};

function decrementa() {
    atualizaTela(valor -= 1);
};

function atualizaTela(val) {
    elementoP.innerHTML = val;
};