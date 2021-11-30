const form = document.forms.dados;
let texto1 = ''
let texto2 = ''

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    texto1 = 'Caracteres são incríveis'
    texto2 = texto1.length * 628.981291.toFixed(3)

    console.log(texto1)
    console.log(texto2)

 });
 