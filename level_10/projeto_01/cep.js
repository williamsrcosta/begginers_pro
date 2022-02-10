import { mascaraCep }      from './regs.js';

let cepApi              = ''
let api_url             = ''

export function viacep() {

    //console.log('cep.value: ' + cep.value)

    rua.value    = ''
    bairro.value = ''
    cidade.value = ''
    estado.value = ''

    //console.log('cep.value.lenght: ' + cep.value.length)
    //console.log('cep.lenght: ' + cep.length)

    console.log("antes do replace do cep: " + cepApi)
    cepApi = cep.value
    cepApi = cepApi.replace('.', '')
    cepApi = cepApi.replace('-', '')

    console.log("depois do replace do cep: " + cepApi)
    
    if(cepApi.length === 8){

        api_url = `https://viacep.com.br/ws/${cepApi}/json/`;

        //console.log('api_url: ')
        //console.log(api_url)

        requisicao(api_url)
        console.log('antes de chamar o addEventListener input cep')
        mascaraCep(cep) //Input de Cep
        console.log('depois de chamar o addEventListener input cep')

    }else{

        rua.value    = ''
        bairro.value = ''
        cidade.value = ''
        estado.value = ''
        alert("Quantidade de caracteres do CEP inválido, favor verificar")
    }    
}

export function requisicao(api_url) {

    //console.log('entrei na function requisicao')

    fetch(api_url).then(function(respostaJSON) {

        //console.log('respostaJSON: ' + respostaJSON)

        respostaJSON.json().then(function(resposta) {

            //console.log('entrei na function resposta')
            //console.log('resposta.erro:' + resposta.erro)

            if(!resposta.erro){

                rua.value    = resposta.logradouro
                bairro.value = resposta.bairro
                cidade.value = resposta.localidade
                estado.value = resposta.uf

                //console.log('sai na function resposta')

            }else{
                alert("CEP inválido, favor verificar")
            }
            
        })
    }).catch(function(e) {

        //console.log('will entrei aqui 2'); 
        
    })
    
    //console.log('sai na function requisicao')
}