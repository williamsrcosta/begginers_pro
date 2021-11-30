const numeros = [50, 100, 150, 200];

let resultado = [];

numeros.forEach(function (valor) {
    valor = valor - 50;
    resultado.push(valor);
});

console.log(resultado);