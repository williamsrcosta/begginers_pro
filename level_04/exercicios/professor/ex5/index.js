let random_array = [5000, 0.18, 27, 1/3];

let resultado = [];

random_array.forEach(function(valor){

    resultado.push(Math.pow(valor, 2));
    
});

console.log(resultado)