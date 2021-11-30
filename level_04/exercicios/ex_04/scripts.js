let aNumeros  = [1,2,3,4,5,6,7,8,9,10]
let aTabuada  = []
let aTabuadas = []
let oTabuadas = {}
let resultado = 0

for (let i = 1; i <= 10; i++) {

    aTabuada  = []

    for (let index = 0; index < aNumeros.length; index++) {

        resultado = aNumeros[index] * i
        aTabuada.push(resultado);
            
    }
    
    //console.log('aTabuada: ' + aTabuada)
    aTabuadas.push(aTabuada);
    
}

//console.log('fora aTabuadas: ' + aTabuadas)
console.log('aTabuadas.length: ' + aTabuadas.length)

for (let j = 0; j < aTabuadas.length; j++) {
    console.log(`Os multiplos de ${j + 1} são: ${aTabuadas[j]}`);
};
