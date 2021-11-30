const form   = document.forms.dados;
const {num1} = form;
let n1       = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    n1 = Number(num1.value.replace(',', '.'))
    
    // *** INICIO PARA DESCOBRIR O MAIOR NUMERO
    if(n1 == 0){

        console.log('O numero: ' + n1 + ' é nulo')

    }

    else if(n1 < 0){

        console.log('O numero: ' + n1 + ' é negativo')

    }

    else{

        console.log('O numero: ' + n1 + ' é positivo')
    }
   // *** FINAL PARA DESCOBRIR O MAIOR NUMERO
 });