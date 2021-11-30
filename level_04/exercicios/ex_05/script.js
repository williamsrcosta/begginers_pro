let random_array = [5000, 0.18, 27, 1/3]

console.log('antes random_array: ' + random_array)

random_array.forEach(function (valor,index) {

    random_array[index] = valor * valor

})

console.log('fora random_array: ' + random_array)