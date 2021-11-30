const form        = document.forms.dados;
const {nome}      = form;
const {idade}     = form;
const {profissao} = form;
const {endereco}  = form;

document.forms.dados.addEventListener("submit", function(evento){
    evento.preventDefault()
    alert(`Seu Nome:      ${nome.value.toUpperCase()}   
           Sua Idade:     ${idade.value}
           Sua Profissão: ${profissao.value.length}
           Seu Endereço:  ${endereco.value.toLowerCase()}`
    )
    console.log(nome.value);
    console.log(idade.value);
    console.log(profissao.value);
    console.log(endereco.value);
 });
 