const form    = document.forms.dados;
let texto1    = 0
let texto2    = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()

    texto1        = "Gostamos de aprender"
    texto2        = texto1.split("").reverse().join("")
    
    console.log(texto1)
    console.log(texto2)

 });
 