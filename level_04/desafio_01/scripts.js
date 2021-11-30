const form        = document.forms.dados;
const {url}       = form;
const {usuario}   = form;
const {legenda}   = form;
const publicacoes = []

document.forms.dados.botaoPostar.addEventListener("click", function(evento) {

    evento.preventDefault()
    /*
    console.log("url:"     + url.value)
    console.log("usuario:" + usuario.value)
    console.log("legenda:" + legenda.value)
    */
    const dadosform = {
                        urlFoto: url.value,
                        usuario: usuario.value,
                        legenda: legenda.value
    }       
    /*
    console.log("dadosform:" + dadosform)
    console.log("dadosform:" + dadosform.urlFoto)
    console.log("dadosform:" + dadosform.usuario)
    console.log("dadosform:" + dadosform.legenda)
    */
    salvaPublicacao(dadosform)
    postaPublicacao(dadosform)
    LimpaCamposForm()
                            
});

function salvaPublicacao(publicacao) {

    console.log("entrei na funcao salvaPublicacao")
    console.log("publicacao: " + publicacao)

    const campoVazio = Object.keys(publicacao).some(function(prop) {

        console.log("publicacao[prop]: " + publicacao[prop])
        return publicacao[prop] == ''
    })

    if (!campoVazio) {
        publicacoes.unshift(publicacao)
    } else{
        alert("Preencha todos os campos")
    }

}

function templatePublicacao(publicacao) {

    console.log("entrei na funcao templatePublicacao")
    console.log("publicacao: " + publicacao)

    return `<div>
                <h2>${publicacao.usuario}</h2>
                <img src="${publicacao.urlFoto}" width="500">
                <p>${publicacao.legenda}</p>
            </div>`
}

function postaPublicacao(){

    console.log("entrei na funcao postaPublicacao")
    
    feed.innerHTML = ''

    publicacoes.forEach(function(publi) {
        console.log('publi:' + publi)
        feed.innerHTML += templatePublicacao(publi)
    })
}

function LimpaCamposForm(){

    console.log("entrei na funcao LimpaCamposForm")

    document.querySelectorAll('input').forEach(function(input){
        input.value = ''
    })
}