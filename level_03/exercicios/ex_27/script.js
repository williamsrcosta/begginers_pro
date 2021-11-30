const form    = document.forms.dados;
let n1        = 0
let n2        = 0
let resultado = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()

    n1        = Math.random() * 10
    n2        = Math.random() * 10
    resultado = Math.pow(n1,n2).toFixed(2)

    console.log(resultado)
    

 });
 