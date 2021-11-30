const form = document.forms.dados;
let texto1 = ''
let texto2 = ''

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    texto1 = 'Eu sou um programador'
    texto2 = texto1.substr(3, 20);

    console.log(texto1)
    console.log(texto2)

 });
 