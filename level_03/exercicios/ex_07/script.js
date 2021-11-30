const form        = document.forms.dados;
const {nota1}     = form;
const {nota2}     = form;
let n1            = 0
let n2            = 0
let resultado     = 0

document.forms.dados.addEventListener("submit", function(evento){
    evento.preventDefault()
    
    n1        = Number(nota1.value.replace(',', '.'))
    n2        = Number(nota2.value.replace(',', '.'))
    resultado = (n1 + n2) / 2

    console.log(nota1.value)
    console.log(nota2.value)
    console.log(n1)
    console.log(n2)
    console.log(resultado)

    if(resultado >= 6){

        document.getElementById("resultadop").textContent = 'Aprovado'

    }else{

        document.getElementById("resultadop").textContent = 'Reprovado'
    }

    

 });
 