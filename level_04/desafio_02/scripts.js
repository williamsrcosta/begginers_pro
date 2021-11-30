// busca do elemento button que receberá o estilo
let resultado = document.getElementById('resultado');

// busca do textArea que receberá o CSS do button
let cssResultado = document.getElementById('css');

// função que altera a cor de fundo do button com base de uma cor passada como parametro
function corDeFundo(cor) {
    resultado.style.backgroundColor = cor;
};

function paddingTopBottom(pxs) {
    resultado.style.paddingTop = `${pxs}px`;
    resultado.style.paddingBottom = `${pxs}px`;
};

function paddingRigthLeft(pxs) {
    resultado.style.paddingRight = `${pxs}px`;
    resultado.style.paddingLeft = `${pxs}px`;
};

function textoBotao(texto) {
    resultado.textContent = texto;
};

function borderRadius(pxs) {
    resultado.style.borderRadius = `${pxs}px`;
};

function tamanhoFonte(pxs) {
    resultado.style.fontSize = `${pxs}px`;
};

function corFonte(cor) {
    resultado.style.color = cor;
};

document.getElementById('background_color')
    .addEventListener('input', function (evt) {
        corDeFundo(evt.target.value);
    });

document.getElementById('paddingTopBotton')
    .addEventListener('input', function (evt) {
        paddingTopBottom(evt.target.value);
    });

paddingLeftRigth.addEventListener('input', function (evt) {
    paddingRigthLeft(evt.target.value);
});

texto.addEventListener('input', function (evt) {
    textoBotao(evt.target.value);
});

font_size.addEventListener('input', function (evt) {
    tamanhoFonte(evt.target.value);
});

cor_fonte.addEventListener('input', function (evt) {
    corFonte(evt.target.value);
});

border_radius.addEventListener('input', function (evt) {
    borderRadius(evt.target.value);
});

resultado.addEventListener('click', function (evt) {
    exibeEstilo(evt.target);
});

function exibeEstilo(elemento) {
    let attStyleBtn = elemento.getAttribute('style');
    cssResultado.value = attStyleBtn;
}
