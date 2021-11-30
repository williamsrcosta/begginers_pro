const numeros = [1, 50, -288, 0.18]

console.log('antes numeros: ' + numeros)

numeros.forEach(function (valor,index) {

    numeros[index] = valor - 50

})

console.log('fora numeros: ' + numeros)