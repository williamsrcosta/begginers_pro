import { mascaraEmail }            from './regs.js';
import { mascaraTelefone }         from './regs.js';
import { mascaraRg }               from './regs.js';
import { mascaraCPF }              from './regs.js';
import { viacep }                  from './cep.js';
import { guardaValorLocalStorage } from './localStorage.js';

const form              = document.forms.dados;
const {nome}            = form;
const {sobrenome}       = form;
const {telefone}        = form;
const {email}           = form;
const {cep}             = form;
const {cidade}          = form;
const {rua}             = form;
const {bairro}          = form;
const {estado}          = form;
const {rg}              = form;
const {cpf}             = form;
    
let objForm             = {}
let vetorForms          = JSON.parse(localStorage.getItem('Forms')) || []
let elementotp          = document.querySelector('#contador');
let JSONForms           = ''

email.addEventListener('input', () => mascaraEmail(email)) //Input de email
telefone.addEventListener('input', () => mascaraTelefone(telefone)) //Input de telefone
rg.addEventListener('input', () => mascaraRg(rg)) //Input de rg
cpf.addEventListener('input', () => mascaraCPF(cpf)) //Input de cpf

document.forms.dados.btncadastrar.addEventListener("click", function(evento) {

    evento.preventDefault()

    let dataAtual = new Date()
    let dia       = String(dataAtual.getDate()).length      === 1 ? '0' + dataAtual.getDate()        : dataAtual.getDate()
    let mes       = String(dataAtual.getMonth() + 1).length === 1 ? '0' + (dataAtual.getMonth() + 1) : dataAtual.getMonth() + 1
    let ano       = dataAtual.getFullYear()
    let dataFinal = ''

    dataFinal = dia + '/' + mes + '/' + ano

    //console.log('dataFinal: '   + dataFinal)
    //console.log("nome:"         + nome.value)
    //console.log("sobrenome:"    + sobrenome.value)
    //console.log("email:"        + email.value)
    //console.log("telefone:"     + telefone.value)
    //console.log("cep:"          + cep.value)
    //console.log("rua:"          + rua.value)
    //console.log("bairro:"       + bairro.value)
    //console.log("cidade:"       + cidade.value)
    //console.log("estado:"       + estado.value)
    //console.log("rg:"           + rg.value)
    //console.log("cpf:"          + cpf.value)

    objForm = new geraObjeto(dataFinal,nome.value,sobrenome.value,email.value,telefone.value,cep.value,rua.value,bairro.value,cidade.value,estado.value,rg.value,cpf.value)

    //console.log("objForm.nome:"         + objForm.nome)
    //console.log("objForm.sobrenome:"    + objForm.sobrenome)
    //console.log("objForm.email:"        + objForm.email)
    //console.log("objForm.telefone:"     + objForm.telefone)
    //console.log("objForm.cep:"          + objForm.cep)
    //console.log("objForm.rua:"          + objForm.rua)
    //console.log("objForm.bairro:"       + objForm.bairro)
    //console.log("objForm.cidade:"       + objForm.cidade)
    //console.log("objForm.estado:"       + objForm.estado)
    //console.log("objForm.rg:"           + objForm.rg)
    //console.log("objForm.cpf:"          + objForm.cpf)

    //enviar para o vetor
    vetorForms.push(objForm);
    adicionarItem(vetorForms)
    vetorForms.map(rest =>{
        //console.log('rest: ' + rest);    
    }) 

    //console.log('vetorForms: ');
    //console.log(vetorForms);

    limparForm()

    alert('Resultados enviado para o Tabela')

})  

document.getElementById("ver-historico").onclick = function () { 

    //console.log('entrei aqui ver-historico')

    if(vetorForms.length > 0)  {

        varrerVetor()
        adicionaContador()    
        
    }else{

        //console.log('entrei no else')    
        
    } 

}

function geraObjeto(data,nome,sobrenome,email,telefone,cep,rua,bairro,cidade,estado,rg,cpf) {

    this.data         = data
    this.nome         = nome
    this.sobrenome    = sobrenome
    this.email        = email
    this.telefone     = telefone
    this.cep          = cep
    this.rua          = rua
    this.bairro       = bairro
    this.cidade       = cidade
    this.estado       = estado
    this.rg           = rg
    this.cpf          = cpf

}

function varrerVetor(){

    let elementotResultHist = document.querySelector('#tbodyresultadohistorico');

    elementotResultHist.innerHTML = ''

    console.log('entrei aqui varrerVetor')
    console.log('vetorForms')
    console.log(vetorForms)
    //console.log('elementotResultHist')
    //console.log(elementotResultHist)

    vetorForms.forEach(function(vetorForm, indice, array) {

        //console.log('indice:' + indice)
     
        elementotResultHist.innerHTML += `<tr>
                                            <th scope="row">${indice + 1}</th>
                                            <td>${vetorForm.nome + ' ' + vetorForm.sobrenome}</td>
                                            <td>${vetorForm.email}</td>
                                            <td>${vetorForm.telefone}</td>
                                            <td>${vetorForm.cidade + ' - ' + vetorForm.estado}</td>
                                            <td>${vetorForm.rua}</td>
                                            <td>${vetorForm.rg}</td>
                                            <td>${vetorForm.cpf}</td>
                                            <td>${vetorForm.data}</td>
                                            <td class="excluir-item" onclick="excluiRegistro(${indice})">
                                                <span class="material-icons">
                                                    delete
                                                </span>
                                            </td>
                                        </tr> `
        
        //console.log(`data         ${vetorForm.data}`);
        //console.log(`nome         ${vetorForm.nome}`);
        //console.log(`email        ${vetorForm.email}`);
        //console.log(`telefone     ${vetorForm.telefone}`);
        //console.log(`rua          ${vetorForm.rua}`);
        //console.log(`bairro       ${vetorForm.bairro}`);
        //console.log(`cidade       ${vetorForm.cidade}`);
        //console.log(`estado       ${vetorForm.estado}`);
        //console.log(`rg           ${vetorForm.rg}`);
        //console.log(`cpf          ${vetorForm.cpf}`);

    })

    console.log("fim da funcao varrerVetor")
}

function adicionaContador(){

    elementotp.innerHTML  = ''
    elementotp.innerHTML += `Contador: ${vetorForms.length}`
}

document.getElementById("fechar-historico").onclick = function () { 


}

document.getElementById("excluir-registros").onclick = function () { 

    //console.log('inicio excluir-registros')
    //console.log(vetorForms)
    
    limparForm()
    vetorForms = []

    //console.log('depois de zerar o vetor')
    //console.log(vetorForms)
    varrerVetor()
    //console.log('final excluir-registros')

}

function limparForm(){

    nome.value         = ''
    sobrenome.value    = ''
    email.value        = ''
    telefone.value     = ''
    cep.value          = ''
    rua.value          = ''
    bairro.value       = ''
    cidade.value       = ''
    estado.value       = ''
    rg.value           = ''
    cpf.value          = ''

    email.classList.add('email-invalid');
    email.classList.remove('email-valid');
    document.getElementById("email").style.backgroundColor = '#bb2f1c'

}

function excluiRegistro(posicaoRegistro) {

    vetorForms.splice(posicaoRegistro, 1);
    varrerVetor()
    adicionaContador()

}

document.getElementById('cep').addEventListener('blur', function(e) {

    viacep()

})

function adicionarItem(vetorForms) {

    JSONForms = JSON.stringify(vetorForms);
    console.log('JSON: ', JSONForms);
    
    guardaValorLocalStorage(JSONForms)
    
}
