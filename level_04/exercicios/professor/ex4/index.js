let numeros_base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado_final = [];

numeros_base.forEach(function (valor) {

    let resultado_arr = [];

    numeros_base.forEach(function (multiplicador) {
        let result = multiplicador * valor;
        resultado_arr.push(result);
    });

    resultado_final.push(resultado_arr);
});

console.log('resultado_final: ' + resultado_final)

for (let i = 0; i < resultado_final.length; i++) {
    console.log(`Os multiplos de ${i + 1} são: ${resultado_final[i]}`);
};