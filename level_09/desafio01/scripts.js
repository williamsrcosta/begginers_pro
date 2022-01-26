const form              = document.forms.dados;
const {nome}            = form;
const {sobrenome}       = form;
const {email}           = form;
const {telefone}        = form;
const {cep}             = form;
const {rua}             = form;
const {bairro}          = form;
const {cidade}          = form;
const {estado}          = form;
const {numcasa}         = form;
let objForm             = {}
let vetorForms          = []
let elementotBodyResult = document.querySelector('#tbodyResult');
let elementotp          = document.querySelector('#contador');
let api_url             = ''

document.forms.dados.btncadastrar.addEventListener("click", function(evento) {

    evento.preventDefault()

    let dataAtual = new Date()
    let dia       = String(dataAtual.getDate()).length      === 1 ? '0' + dataAtual.getDate()        : dataAtual.getDate()
    let mes       = String(dataAtual.getMonth() + 1).length === 1 ? '0' + (dataAtual.getMonth() + 1) : dataAtual.getMonth() + 1
    let ano       = dataAtual.getFullYear()
    let dataFinal = ''

    dataFinal = dia + '/' + mes + '/' + ano

    console.log('dataFinal: '   + dataFinal)
    console.log("nome:"         + nome.value)
    console.log("sobrenome:"    + sobrenome.value)
    console.log("email:"        + email.value)
    console.log("telefone:"     + telefone.value)
    console.log("cep:"          + cep.value)
    console.log("rua:"          + rua.value)
    console.log("numcasa:"      + numcasa.value)
    console.log("bairro:"       + bairro.value)
    console.log("cidade:"       + cidade.value)
    console.log("estado:"       + estado.value)

    objForm = new geraObjeto(dataFinal,nome.value,sobrenome.value,email.value,telefone.value,cep.value,rua.value,numcasa.value,bairro.value,cidade.value,estado.value)

    console.log("objForm.nome:"         + objForm.nome)
    console.log("objForm.sobrenome:"    + objForm.sobrenome)
    console.log("objForm.email:"        + objForm.email)
    console.log("objForm.telefone:"     + objForm.telefone)
    console.log("objForm.cep:"          + objForm.cep)
    console.log("objForm.rua:"          + objForm.rua)
    console.log("objForm.numcasa:"      + objForm.numcasa)
    console.log("objForm.bairro:"       + objForm.bairro)
    console.log("objForm.cidade:"       + objForm.cidade)
    console.log("objForm.estado:"       + objForm.estado)

    //enviar para o vetor
    vetorForms.push(objForm);
    vetorForms.map(rest =>{
        console.log('rest: ' + rest);    
    }) 

    console.log('vetorForms: ');
    console.log(vetorForms);

    limparForm()

    alert('Resultados enviado para o Tabela')

})  

document.getElementById("ver-historico").onclick = function () { 

    console.log('entrei aqui ver-historico')

    if(vetorForms.length > 0)  {

        varrerVetor()
        adicionaContador()    
        
    }else{

        console.log('entrei no else')    
        
    } 

}

function geraObjeto(data,nome,sobrenome,email,telefone,cep,rua,numcasa,bairro,cidade,estado) {

    this.data         = data
    this.nome         = nome
    this.sobrenome    = sobrenome
    this.email        = email
    this.telefone     = telefone
    this.cep          = cep
    this.rua          = rua
    this.numcasa      = numcasa
    this.bairro       = bairro
    this.cidade       = cidade
    this.estado       = estado

}

function varrerVetor(){

    let elementotResultHist = document.querySelector('#tbodyresultadohistorico');

    elementotResultHist.innerHTML = ''

    console.log('entrei aqui varrerVetor')
    console.log('vetorForm')
    console.log('elementotResultHist')
    console.log(elementotResultHist)

    vetorForms.forEach(function(vetorForm, indice, array) {

        console.log('indice:' + indice)
     
        elementotResultHist.innerHTML += `<tr>
                                            <th scope="row">${indice + 1}</th>
                                            <td>${vetorForm.nome + ' ' + vetorForm.sobrenome}</td>
                                            <td>${vetorForm.email}</td>
                                            <td>${vetorForm.telefone}</td>
                                            <td>${vetorForm.cidade + ' - ' + vetorForm.estado}</td>
                                            <td>${vetorForm.rua + ', ' + vetorForm.numcasa}</td>
                                            <td>${vetorForm.data}</td>
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
        console.log(`rua          ${vetorForm.rua}`);
        console.log(`numcasa      ${vetorForm.numcasa}`);
        console.log(`bairro       ${vetorForm.bairro}`);
        console.log(`cidade       ${vetorForm.cidade}`);
        console.log(`estado       ${vetorForm.estado}`);

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

    console.log('inicio excluir-registros')
    console.log(vetorForms)
    
    limparForm()
    vetorForms = []

    console.log('depois de zerar o vetor')
    console.log(vetorForms)
    varrerVetor()
    console.log('final excluir-registros')

}

function limparForm(){

    nome.value         = ''
    sobrenome.value    = ''
    email.value        = ''
    telefone.value     = ''
    cep.value          = ''
    rua.value          = ''
    numcasa.value      = ''
    bairro.value       = ''
    cidade.value       = ''
    estado.value       = ''

}

function excluiRegistro(posicaoRegistro) {

    vetorForms.splice(posicaoRegistro, 1);
    varrerVetor()
    adicionaContador()

}

document.getElementById('cep').addEventListener('blur', function(e) {

    console.log('cep.value: ' + cep.value)

    rua.value    = ''
    bairro.value = ''
    cidade.value = ''
    estado.value = ''

    console.log('cep.value.lenght: ' + cep.value.length)
    console.log('cep.lenght: ' + cep.length)
    
    if(cep.value.length === 8){

        api_url = `https://viacep.com.br/ws/${cep.value}/json/`;

        console.log('api_url: ')
        console.log(api_url)

        requisicao(api_url)

    }else{

        rua.value    = ''
        bairro.value = ''
        cidade.value = ''
        estado.value = ''
        alert("Quantidade de caracteres do CEP inválido, favor verificar")
    }    
})

function requisicao(api_url) {

    console.log('entrei na function requisicao')

    fetch(api_url).then(function(respostaJSON) {

        console.log('respostaJSON: ' + respostaJSON)

        respostaJSON.json().then(function(resposta) {

            console.log('entrei na function resposta')
            console.log('resposta.erro:' + resposta.erro)

            if(!resposta.erro){

                rua.value    = resposta.logradouro
                bairro.value = resposta.bairro
                cidade.value = resposta.localidade
                estado.value = resposta.uf

                console.log('sai na function resposta')

            }else{
                alert("CEP inválido, favor verificar")
            }
            
        })
    }).catch(function(e) {

        console.log('will entrei aqui 2'); 
        
    })
    
    console.log('sai na function requisicao')
}