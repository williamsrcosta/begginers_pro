const form        = document.forms.dados;
const {nome}      = form;
const {idade}     = form;
const {profissao} = form;
const {gosto}     = form;
let objetoVoce    = {}
let objetoPessoa1 = {}
let objetoPessoa2 = {}
let arrayPessoas  = []

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()

    objetoVoce = { nome: nome.value,
                   idade: idade.value,
                   profissao: profissao.value,
    }

    objetoPessoa1 = { nome: 'Juliana',
        idade: 38,
        profissao: 'Recepcionista',
    }

    objetoPessoa2 = { nome: 'Vinicius',
        idade: 4,
        profissao: 'Estudante',
    }

    arrayPessoas.push(objetoVoce)
    arrayPessoas.push(objetoPessoa1)
    arrayPessoas.push(objetoPessoa2)

    console.log(arrayPessoas)
 });
 
