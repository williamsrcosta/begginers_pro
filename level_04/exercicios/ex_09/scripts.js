const numeros = [1, 2, 3, 4, 5]

// INICIO FOR IN
for (const i in numeros) {

    if (Object.hasOwnProperty.call(numeros, i)) {

        console.log('for in: ' + numeros[i])

    }
}

// FINAL FOR IN

// INICIO FOR OF

for (const [i, numero] of numeros.entries()) {

    console.log('for of: ' + numeros[i])
    
}

// FINAL FOR OF

// INICIO FOR 
for (let i = 0; i < numeros.length; i++) {

    console.log('for: ' + numeros[i])
    
}

// FINAL FOR 

// INICIO FOR EACH
numeros.forEach((numero, i) => {

    console.log('for each: ' + numeros[i])
 
})

// FINAL FOR EACH