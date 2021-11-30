const numeros = [1, 2, 3, 4, 5];

for (let numero of numeros) {
    console.log(numero)
};

for (i in numeros) {
    console.log(numeros[i]);
};

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
};

numeros.forEach(function (numero) {
    console.log(numero);
});