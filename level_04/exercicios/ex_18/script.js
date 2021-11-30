const form          = document.forms.dados;
const {nome}        = form;
const {idade}       = form;
let   Objpessoas    = {}
let   Vetorpessoas  = []
let   pessoa        = ''

document.forms.dados.addEventListener("submit", function(evento){
    
    evento.preventDefault()
    
    pessoa = new CriaPessoa (0,
                             nome.value,
                             idade.value,
    ); 

    Vetorpessoas.push(pessoa)
    
    Vetorpessoas.forEach(function(Vetorpessoa, indice, array) {

        console.log(`nome  ${Vetorpessoa.nome} `)
        console.log(`idade ${Vetorpessoa.idade} `)

    })

    nome.value      = ''
    idade.value     = ''
    document.getElementById("nome").focus();

 });

 function CriaPessoa(id,nome, idade) {

    let id2    = Math.random() * 10 
    this.id    = id2.toFixed(4).replace('.', '');
    this.nome  = nome;
    this.idade = idade;
};