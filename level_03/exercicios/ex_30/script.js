const form    = document.forms.dados;
let resultado = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()

    resultado        = (60 * 59 * 58 * 57 * 56 * 55) / (6 * 5 * 4 * 3 * 2 * 1);
        
    console.log(resultado)
    
 });
 