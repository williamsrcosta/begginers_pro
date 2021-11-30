const form             = document.forms.dados;
const {stringqualquer} = form;
const {numero1}        = form;
let n1                 = 0
let tamString          = 0
let qtd                = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    n1        = Number(numero1.value)
    tamString = stringqualquer.value.length

    if(n1 === tamString){

      console.log('Os tamanhos são iguais dos campos')

    }else if(n1 >= tamString){

      qtd = n1 - tamString
      console.log('Esta string tem ' + qtd + ' caracteres a mais ')

    }else{

      qtd = tamString - n1
      console.log('Esta string tem ' + qtd + ' caracteres a menos ')

   }

    
    
 });
 