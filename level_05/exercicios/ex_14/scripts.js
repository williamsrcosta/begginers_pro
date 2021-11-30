const form       = document.forms.dados;
const {nome}     = form;
const {idade}    = form;
let objPessoas   = {}
let vetorPessoas = []
let JSONPessoas  = null

document.forms.dados.btncadastrar.addEventListener("click", function(evento) {

    console.log('nome:' + nome.value)
    console.log('idade:' + idade.value)

    objPessoas = new GeraObjeto(nome.value,idade.value)

    console.log("objPessoas.nome:"         + objPessoas.nome)
    console.log("objPessoas.idade:"        + objPessoas.idade)

    vetorPessoas.push(objPessoas)
    console.log('vetorPessoas')
    console.log(vetorPessoas)

    JSONPessoas = JSON.stringify(vetorPessoas);
    console.log('JSON: ', JSONPessoas);

    adicionarItem();

})     

function GeraObjeto(nome,idade) {

    this.nome  = nome
    this.idade = idade
}

function adicionarItem(vetorPessoas) {

    localStorage.setItem('pessoas', JSONPessoas);
    
}
    