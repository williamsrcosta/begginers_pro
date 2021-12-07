const form          = document.forms.dados;
const {cep}         = form;
const {logradouro}  = form;
const {numero}      = form;
const {complemento} = form;
const {bairro}      = form;
const {cidade}      = form;
const {estado}      = form;
let api_url         = ''
let respostaJSON    = null

document.getElementById('cep').addEventListener('blur', function(e) {

    console.log('cep.value: ' + cep.value)

    logradouro.value  = ''
    complemento.value = ''
    bairro.value      = ''
    cidade.value      = ''
    estado.value      = ''

    console.log('cep.value.lenght: ' + cep.value.length)
    console.log('cep.lenght: ' + cep.length)
    

    if(cep.value.length === 8){

        api_url = `https://viacep.com.br/ws/${cep.value}/json/`;

        console.log('api_url: ')
        console.log(api_url)

        requisicao(api_url)

    }else{

        logradouro.value  = ''
        complemento.value = ''
        bairro.value      = ''
        cidade.value      = ''
        estado.value      = ''
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

                logradouro.value  = resposta.logradouro
                complemento.value = resposta.complemento
                bairro.value      = resposta.bairro
                cidade.value      = resposta.localidade
                estado.value      = resposta.uf

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