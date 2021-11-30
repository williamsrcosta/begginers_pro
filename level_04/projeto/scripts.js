const form              = document.forms.dados;
const {nome}            = form;
const {email}           = form;
const {telefone}        = form;
const {estadocivil}     = form;
const {escolaridade}    = form;
const {cep}             = form;
const {rua}             = form;
const {numcasa}         = form;
const {complemento}     = form;
const {bairro}          = form;
const {cidade}          = form;
const {estado}          = form;
let objForm             = {}
let vetorForms          = []
let elementotBodyResult = document.querySelector('#tbodyResult');
let elementotp          = document.querySelector('#contador');

document.forms.dados.btncadastrar.addEventListener("click", function(evento) {

    evento.preventDefault()

    let dataAtual = new Date()

    dataAtual = (dataAtual.getDate()) + '/' + (dataAtual.getMonth() + 1) + '/' + (dataAtual.getFullYear())

    console.log('dataAtual: ' + dataAtual)
    
    console.log("nome:"         + nome.value)
    console.log("email:"        + email.value)
    console.log("telefone:"     + telefone.value)
    console.log("estadocivil:"  + estadocivil.value)
    console.log("escolaridade:" + escolaridade.value)
    console.log("cep:"          + cep.value)
    console.log("rua:"          + rua.value)
    console.log("numcasa:"      + numcasa.value)
    console.log("complemento:"  + complemento.value)
    console.log("bairro:"       + bairro.value)
    console.log("cidade:"       + cidade.value)
    console.log("estado:"       + estado.value)

    objForm = new geraObjeto(dataAtual,nome.value,email.value,telefone.value,estadocivil.value,escolaridade.value,cep.value,rua.value,numcasa.value,complemento.value,bairro.value,cidade.value,estado.value)

    console.log("objForm.nome:"         + objForm.nome)
    console.log("objForm.email:"        + objForm.email)
    console.log("objForm.telefone:"     + objForm.telefone)
    console.log("objForm.estadocivil:"  + objForm.estadocivil)
    console.log("objForm.escolaridade:" + objForm.escolaridade)
    console.log("objForm.cep:"          + objForm.cep)
    console.log("objForm.rua:"          + objForm.rua)
    console.log("objForm.numcasa:"      + objForm.numcasa)
    console.log("objForm.complemento:"  + objForm.complemento)
    console.log("objForm.bairro:"       + objForm.bairro)
    console.log("objForm.cidade:"       + objForm.cidade)
    console.log("objForm.estado:"       + objForm.estado)

    //enviar para o vetor
    vetorForms.push(objForm);
    vetorForms.map(rest =>{
        console.log('rest: ' + rest);    
    }) 
    console.log('vetorForms: ' + vetorForms);

    limparForm()

    alert('Resultados enviado para o Tabela')

})  

document.getElementById("btn-zero-registro").onclick = function () { 

    document.getElementById('fundo-modal').style.visibility    = "hidden" 
    document.getElementById('zero-registros').style.visibility = "hidden" 

}

document.forms.dados.btncomplemento.addEventListener("click", function(evento) {

    document.getElementById('complemento').disabled = false;

})    

document.getElementById("ver-historico").onclick = function () { 

    if(vetorForms.length > 0)  {

        varrerVetor()
        adicionaContador()    
        document.getElementById('fundo-modal').style.visibility = "visible" 
        document.getElementById('historico').style.visibility   = "visible" 

    }else{

        document.getElementById('fundo-modal').style.visibility    = "visible" 
        document.getElementById('zero-registros').style.visibility = "visible" 

    } 

}

function geraObjeto(data,nome,email,telefone,estadocivil,escolaridade,cep,rua,numcasa,complemento,bairro,cidade,estado) {

    this.data         = data
    this.nome         = nome
    this.email        = email
    this.telefone     = telefone
    this.estadocivil  = estadocivil
    this.escolaridade = escolaridade
    this.cep          = cep
    this.rua          = rua
    this.numcasa      = numcasa
    this.complemento  = complemento
    this.bairro       = bairro
    this.cidade       = cidade
    this.estado       = estado

}

function varrerVetor(){

    let elementotResultHist = document.querySelector('#tbodyresultadohistorico');

    elementotResultHist.innerHTML = ''

    vetorForms.forEach(function(vetorForm, indice, array) {

        console.log('indice:' + indice)
     
        elementotResultHist.innerHTML += `<tr>
                                            <td>${vetorForm.data}</td>
                                            <td>${vetorForm.nome}</td>
                                            <td>${vetorForm.email}</td>
                                            <td>${vetorForm.telefone}</td>
                                            <td>${vetorForm.estadocivil}</td>
                                            <td>${vetorForm.escolaridade}</td>
                                            <td>${vetorForm.cep}</td>
                                            <td>${vetorForm.rua}</td>
                                            <td>${vetorForm.numcasa}</td>
                                            <td>${vetorForm.complemento}</td>
                                            <td>${vetorForm.bairro}</td>
                                            <td>${vetorForm.cidade}</td>
                                            <td>${vetorForm.estado}</td>
                                            <td class="excluir-item" onclick="excluiRegistro(${indice})">
                                                <span class="material-icons">
                                                    delete
                                                </span>
                                            </td>
                                        </tr> `
        
        console.log(`data         ${vetorForm.data}`);
        console.log(`nome         ${vetorForm.nome}`);
        console.log(`email        ${vetorForm.email}`);
        console.log(`telefone     ${vetorForm.telefone}`);
        console.log(`estadocivil  ${vetorForm.estadocivil}`);
        console.log(`escolaridade ${vetorForm.escolaridade}`);
        console.log(`rua          ${vetorForm.rua}`);
        console.log(`numcasa      ${vetorForm.numcasa}`);
        console.log(`complemento  ${vetorForm.complemento}`);
        console.log(`bairro       ${vetorForm.bairro}`);
        console.log(`cidade       ${vetorForm.cidade}`);
        console.log(`estado       ${vetorForm.estado}`);

    })

    console.log("fim da funcao criaTabelaResultado")
}

function adicionaContador(){

    elementotp.innerHTML  = ''
    elementotp.innerHTML += `Contador: ${vetorForms.length}`
}

document.getElementById("fechar-historico").onclick = function () { 

    document.getElementById('fundo-modal').style.visibility = "hidden" 
    document.getElementById('historico').style.visibility   = "hidden"

}

document.getElementById("excluir-registros").onclick = function () { 

    limparForm()
    vetorForms                                              = []
    document.getElementById('fundo-modal').style.visibility = "hidden" 
    document.getElementById('historico').style.visibility   = "hidden"

}

function limparForm(){

    nome.value         = ''
    email.value        = ''
    telefone.value     = ''
    estadocivil.value  = ''
    escolaridade.value = ''
    cep.value          = ''
    rua.value          = ''
    numcasa.value      = ''
    complemento.value  = ''
    bairro.value       = ''
    cidade.value       = ''
    estado.value       = ''

}

function excluiRegistro(posicaoRegistro) {

    vetorForms.splice(posicaoRegistro, 1);
    varrerVetor()
    adicionaContador()

}