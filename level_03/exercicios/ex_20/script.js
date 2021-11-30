const form = document.forms.dados;
let numero = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    //console.log('inicio logaritimo')
    numero = 14
    numero = Math.log10(numero)
    console.log('logaritimo de 14 é: ' + numero.toFixed(3))
    //console.log('final logaritimo')

    //console.log('inicio Expoente')
    numero = Math.pow(10, 2)
    console.log('Expoente de 10 e 2:' + numero.toFixed(3))
    //console.log('final Expoente')

    //console.log('inicio raiz cúbica')
    numero = Math.cbrt(8)
    console.log('raiz cúbica de 8: ' + numero.toFixed(3))
    //console.log('final raiz cúbica')


 });
 