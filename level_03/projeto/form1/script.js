const form    = document.forms.dados;
const {nome}  = form;
const {idade} = form;
let idadeMes  = 0
let idadeDias = 0
let idadeHr   = 0
let url       = ''

document.forms.dados.addEventListener("submit", function(evento){
    
    evento.preventDefault()
    console.log('entrei aqui will: ' + nome.value)
    idadeMes  = Number(idade.value) * 12
    idadeDias = Number(idade.value) * 365
    idadeHr   = Number(idade.value) * 8760

    url   = "https://www.youtube.com/embed/p31pOSBONyI"

    document.getElementById("preview").src= url;

    alert(`Seu Nome:    ${nome.value}   
    Sua Idade em meses: ${idadeMes}
    Sua Idade em dias:  ${idadeDias}
    Sua Idade em horas: ${idadeHr}`)

 });
 