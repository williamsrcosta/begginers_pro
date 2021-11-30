const form        = document.forms.dados;
const {nome}      = form;
const {idade}     = form;
const {profissao} = form;

document.forms.dados.addEventListener("submit", function(evento){
    evento.preventDefault()
    console.log(nome.value);
    console.log(idade.value);
    console.log(profissao.value);
 });