let arr        = [8, 12, 90, 83, 15]
let resultSoma = 0
let resultado  = 0 

console.log('1-) antes arr: ' + arr)

arr.forEach(function (valor,index) {

    resultSoma += valor

})

resultado = resultSoma * 15
console.log('1-) resultSoma: ' + resultSoma)
console.log('1-) resultado: '  + resultado)
console.log('-----------------------------------------------------------------')

console.log('2-) antes arr: ' + arr)

resultSoma = 0
resultado  = 0

arr.forEach(function (valor,index) {

    arr[index] = valor * 15

})

console.log('2-) arr: ' + arr)

arr.forEach(function (valor,index) {

    resultSoma += valor

})

console.log('2-) resultSoma: ' + resultSoma)
