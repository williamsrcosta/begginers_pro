const form        = document.forms.dados;
const {nome}      = form;
const {idade}     = form;
const {profissao} = form;

document.forms.dados.addEventListener("submit", function(evento){
    evento.preventDefault()
    console.log(nome.value);
    console.log(idade.value);
    console.log(profissao.value);

    document.getElementById('resultado').innerHTML += `<p>nome: ${nome.value}</p>
                                                      <p>idade: ${idade.value}</p>
                                                      <p>profissao: ${profissao.value}</p>
                                                      `
    nome.value      = ''
    idade.value     = ''
    profissao.value = ''
    document.getElementById("nome").focus();

 });