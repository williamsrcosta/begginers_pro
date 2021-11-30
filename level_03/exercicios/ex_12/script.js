const form   = document.forms.dados;
const {num1} = form;
const {num2} = form;
const {num3} = form;
let n1       = 0
let n2       = 0
let n3       = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    n1 = Number(num1.value.replace(',', '.'))
    n2 = Number(num2.value.replace(',', '.'))
    n3 = Number(num3.value.replace(',', '.'))

    console.log(num1.value)
    console.log(num2.value)
    console.log(num3.value)
    console.log(n1)
    console.log(n2)
    console.log(n3)
    
    // *** INICIO PARA DESCOBRIR O MAIOR NUMERO
    if(n1 >= n2 && n1 >= n3){

        document.getElementById("maiornump").textContent = 'O maior numero é o N1: ' + n1

    }

    else if(n2 >= n1 && n2 >= n3){

        document.getElementById("maiornump").textContent = 'O maior numero é o N2: ' + n2

    }

    else{

        document.getElementById("maiornump").textContent = 'O maior numero é o N3: ' + n3
    }
   // *** FINAL PARA DESCOBRIR O MAIOR NUMERO

   // *** INICIO PARA DESCOBRIR O MAIOR NUMERO
   if(n1 <= n2 && n1 <= n3){

        document.getElementById("menornump").textContent = 'O menor numero é o N1: ' + n1

    }

    else if(n2 <= n1 && n2 <= n3){

        document.getElementById("menornump").textContent = 'O menor numero é o N2: ' + n2

    }

    else{

        document.getElementById("menornump").textContent = 'O menor numero é o N3: ' + n3
    }
    // *** FINAL PARA DESCOBRIR O MAIOR NUMERO
 });