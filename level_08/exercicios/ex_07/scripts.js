let numbers = [1, 9, 32, 27, 90];

//console.log('1-) Vetor numbers')
//console.log(numbers)

ordenarVetor(numbers, NumDivPorNove);

function ordenarVetor(numbers, callback) {

    numbers = numbers.sort(compararNumeros)
    //console.log('2-) Vetor numbers')
    //console.log(numbers)

    callback(numbers);
   
}

function NumDivPorNove(numeros) {

    //console.log('entrei aqui NumDivPorNove')

    numeros.forEach((numero, i) => {

        if(numero % 9 == 0) {
    
            console.log(numero)
    
        }
    })
    
}

function compararNumeros(a, b) {

    return a - b;

  }
