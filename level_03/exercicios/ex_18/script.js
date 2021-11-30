const form             = document.forms.dados;
const {stringqualquer} = form;
const {numero1}        = form;
let n1                 = 0
let tamString          = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    n1        = Number(numero1.value)
    tamString = stringqualquer.value.length

    console.log(stringqualquer.value);
    console.log(numero1.value);
    console.log(n1);
    console.log(tamString);

    if(n1 === tamString){

       console.log('Os tamanhos são iguais dos campos')

    }else{
       console.log('Os tamanhos são diferentes dos campos')
    }

    
    
 });
 