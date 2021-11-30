const form       = document.forms.dados;
const {tarefa}   = form;
let objTarefas   = {}
let vetorTarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];
let JSONTarefas  = null

document.forms.dados.btnsalvar.addEventListener("click", function(evento) {

    console.log('tarefa:' + tarefa.value)
    
    objTarefas = new GeraObjeto(tarefa.value)

    console.log("objTarefas.tarefa:"  + objTarefas.tarefa)
    
    vetorTarefas.push(objTarefas)
    console.log('vetorTarefas')
    console.log(vetorTarefas)

    adicionarItem(vetorTarefas)
    varrerVetor()
    LimpaInput()

})     

document.forms.dados.btnlimpar.addEventListener("click", function(evento) {

    console.log('entrei no botão limpar')

    excluiTotLocalStorage()
    excluiTotVetor()
    varrerVetor()
    LimpaInput()


})       

window.onload = initPage;

function initPage(){

    console.log('entrei aqui will')
    varrerVetor()
}

function GeraObjeto(tarefa) {

    this.tarefa  = tarefa

}

function excluiTotVetor() {

    vetorTarefas = []
    
}

function excluiTotLocalStorage() {

    localStorage.clear()
    
}

function adicionarItem(vetorTarefas) {

    JSONTarefas = JSON.stringify(vetorTarefas);
    console.log('JSON: ', JSONTarefas);
    localStorage.setItem('Tarefas', JSONTarefas);
    
}

function varrerVetor(){

    let elementotResultHist = document.querySelector('#ul-lista');

    elementotResultHist.innerHTML = ''

    vetorTarefas.forEach(function(vetorTarefa, indice, array) {

        console.log('indice:' + indice)
     
        elementotResultHist.innerHTML += `<li>${vetorTarefa.tarefa}  
                                              <span class="material-icons" id="excluir-item" onclick="excluiRegistro(${indice})">
                                                    delete
                                              </span> 
                                           </li>`
        
        console.log(`tarefa ${vetorTarefa.tarefa} `);

    })

    console.log("fim da funcao criaTabelaResultado")
}
    
function LimpaInput(){

    tarefa.value = ''
}

function excluiRegistro(posicaoRegistro) {

    vetorTarefas.splice(posicaoRegistro, 1);
    excluiTotLocalStorage()
    varrerVetor()
    adicionarItem(vetorTarefas)
    LimpaInput()
}