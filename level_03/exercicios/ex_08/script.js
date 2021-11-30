const form         = document.forms.dados;
const {nascimento} = form;
let anoNasc        = 0
let anoAtual       = 0
let idade          = 0

document.forms.dados.addEventListener("submit", function(evento){
    
    evento.preventDefault()
    console.log('entrei aqui will: ' + nascimento.value)

    anonasc  = nascimento.value.substring(0, 4);
    anoAtual = new Date().getFullYear()
    idade    = anoAtual - anonasc

    console.log('anonasc: '  + anonasc)
    console.log('anoAtual: ' + anoAtual)
    console.log('idade: '    + idade)

    if(idade > 1){

        document.getElementById("suaidadep").textContent = idade + ' anos'

    }else{

        document.getElementById("suaidadep").textContent = idade + ' ano'
    }    
 });
 