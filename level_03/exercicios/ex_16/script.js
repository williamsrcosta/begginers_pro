const form        = document.forms.dados;
const {nome}      = form;
const {idade}     = form;
const {profissao} = form;
const {gosto}     = form;
let objetoVoce    = {}
let arrayGosto    = []

document.forms.dados.addEventListener("submit", function(evento){
    evento.preventDefault()

    objetoVoce = { nome: nome.value,
                   idade: idade.value,
                   profissao: profissao.value,
    }

    arrayGosto = gosto.value.split(';')

    console.log(nome.value);
    console.log(idade.value);
    console.log(profissao.value);
    console.log(gosto.value);
    console.log(objetoVoce)
    console.log(arrayGosto)
 });
 
