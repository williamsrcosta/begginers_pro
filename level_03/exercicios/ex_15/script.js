const form   = document.forms.dados;
const {num1} = form;
let n1       = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    n1 = Number(num1.value.replace(',', '.'))

    console.log(num1.value)
    console.log(n1)
    console.log(n1 % 2)
   
    if(n1 % 2 == 0){

        document.getElementById("resultadop").textContent = 'O numero: ' + n1 + ' é par'

    }

    else{

        document.getElementById("resultadop").textContent = 'O numero: ' + n1 + ' é impar'
    }
   
 });