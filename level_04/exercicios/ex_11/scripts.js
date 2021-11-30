const numeros = [10, 1, 3, -6, 0.18];

console.log('numeros antes: ' + numeros)

numeros.sort(compararNumeros)

console.log('numeros depois: ' + numeros)

function compararNumeros(a, b) {
    return a - b;
  }