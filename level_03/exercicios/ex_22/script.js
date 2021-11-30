const form = document.forms.dados;
let texto1 = ''
let texto2 = ''

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    texto1 = 'Eu gosto muito de programar'
    texto2 = texto1.substr(18, 9);

    console.log(texto1)
    console.log(texto2)

 });
 