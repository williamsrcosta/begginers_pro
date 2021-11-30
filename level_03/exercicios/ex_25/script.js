const form = document.forms.dados;
let texto1 = ''
let texto2 = ''

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    //22
    texto1 = 'Eu gosto muito de programar'
    texto2 = texto1.substr(18, 9);

    console.log('ex_22')
    console.log(texto1)
    console.log(texto2)

    //23
    texto1 = 'Eu sou um programador'
    texto2 = texto1.substr(3, 20);

    console.log('ex_23')
    console.log(texto1)
    console.log(texto2)

    //24
    texto1 = 'Caracteres são incríveis'
    texto2 = texto1.length * 628.981291.toFixed(3)

    console.log('ex_24')
    console.log(texto1)
    console.log(texto2)
 });
 