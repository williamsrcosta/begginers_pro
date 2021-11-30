const form       = document.forms.dados;
const {raioHtml} = form;
let raio         = 0
let pi           = 0
let area         = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    raio = Number(raioHtml.value.replace(',', '.'))
    pi   = (Math.PI)
    area = pi * Math.pow(raio, 2)
    
    console.log(raioHtml.value)
    console.log(raio)
    console.log(pi)
    console.log(area)

    document.getElementById("resultadop").textContent = area

    /*
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
    */
 });