const form      = document.forms.dados;
const {email}   = form;
const {senha}   = form;
let objEmails   = {}
let vetorEmails = JSON.parse(localStorage.getItem('Emails')) || [];
let JSONEmails  = null
let lRet        = true

document.forms.dados.btncadastrar.addEventListener("click", function(evento) {

    lRet = true 

    console.log('email:' + email.value)
    console.log('senha:' + senha.value)
    
    // *** INICIO VALIDACOES
    if (email.value.trim() === ''){

        console.log("entrei no if do email")
        /*objEmails   = {}
        vetorEmails = []*/
        lRet        = false
        mensagem('Campo de Email em Branco não pode, favor verificar', 'erro')
        LimpaInput()
        
    }

    if (lRet === true){
        if (senha.value.trim() === ''){

            console.log("entrei no if da senha")
            /*objEmails   = {}
            vetorEmails = []*/
            lRet        = false
            mensagem('Campo de Senha em Branco não pode, favor verificar', 'erro')
            LimpaInput()
            
        }
    }

    // *** inicio Verificar se já não esta no localStorage

    //checa email se já está cadastrado
    if (lRet === true){
        if (email.value.trim() !== ''){

            console.log("entrei no if do email que está escrito")

            vetorEmails.forEach(function(vetoremail, indice, array) {

                console.log('indice:' + indice)
                console.log(`email ${vetoremail.email} `);
                console.log(`email ${vetoremail.senha} `);

                if (vetoremail.email === email.value){

                    lRet = false 
                    mensagem('email já cadastrado, clique no login', 'alerta')
                    LimpaInput()

                }
        
            })        
        }
    }
    //checa email e senha 
    if (lRet === true){

        if (email.value.trim() !== '' && senha.value.trim() !== ''){

            console.log("entrei no if do email e senha que está escrito")


            vetorEmails.forEach(function(vetoremail, indice, array) {

                console.log('indice:' + indice)
                console.log(`email ${vetoremail.email} `);
                console.log(`email ${vetoremail.senha} `);

                if (vetoremail.email === email.value && vetoremail.senha === senha.value){

                    lRet = false 
                    mensagem('email e senha já cadastrado, clique no login', 'alerta')
                    LimpaInput()

                }
        
            })        
        }
    }
    // *** final Verificar se já não esta no localStorage
    // *** FINAL VALIDACOES

    console.log("depois da validação: " + lRet)

    if (lRet == true){

        objEmails = new GeraObjeto(email.value,senha.value)

        console.log("objEmails.email:"  + objEmails.email)
        console.log("objEmails.senha:"  + objEmails.senha)
        
        vetorEmails.push(objEmails)
        console.log('vetorEmails')
        console.log(vetorEmails)

        adicionarItem(vetorEmails)
        mensagem('email cadastrado com sucesso', 'sucesso')
        LimpaInput()

    }
})     

document.forms.dados.btnlogin.addEventListener("click", function(evento) {

    lRet = true 

    console.log('email:' + email.value)
    console.log('senha:' + senha.value)
    
    // *** INICIO VALIDACOES
    if (email.value.trim() === ''){

        console.log("entrei no if do email")
        /*objEmails   = {}
        vetorEmails = []*/
        lRet        = false
        mensagem('Campo de Email em Branco não pode, favor verificar', 'erro')
        LimpaInput()
        
    }

    //se o vetor tiver vazio tem que dar erro, pq não tem nenhum cadastro
    if (lRet === true){

        if(vetorEmails.length <= 0){
        
            mensagem('Nenhum email ainda cadastrado por favor verifique', 'erro')
            lRet = false

        }
    }

    if (lRet === true){
        if (senha.value.trim() === ''){

            console.log("entrei no if da senha")
            /*objEmails   = {}
            vetorEmails = []*/
            lRet        = false
            mensagem('Campo de Senha em Branco não pode, favor verificar', 'erro')
            LimpaInput()
            
        }
    }

    // *** inicio Verificar se já não esta no localStorage

    //checa email e senha 
    if (lRet === true){

        if (email.value.trim() !== '' && senha.value.trim() !== ''){

            console.log("entrei no if do email e senha que está escrito")

            vetorEmails.forEach(function(vetoremail, indice, array) {

                console.log('indice:' + indice)
                console.log(`email ${vetoremail.email} `);
                console.log(`email ${vetoremail.senha} `);

                if (vetoremail.email === email.value && vetoremail.senha === senha.value){

                    lRet = true 
                    
                }
                else if(vetoremail.email === email.value && vetoremail.senha !== senha.value){

                    lRet = false 
                    mensagem('senha está errada', 'erro')
                    LimpaInput()

                }
        
            })        
        }
    }

    //verifica se o email não existe dentro do local storage
    if (lRet === true){

        vetorEmails.forEach(function(vetoremail, indice, array) {

            console.log('indice:' + indice)
            console.log(`email ${vetoremail.email} `);
            console.log(`senha ${vetoremail.senha} `);

            if (vetoremail.email !== email.value){

                lRet = false 
                mensagem('email não é cadastrado, clique no Cadastrar', 'alerta')
                LimpaInput()

            }
    
        }) 
    }
    // *** final Verificar se já não esta no localStorage
    // *** FINAL VALIDACOES

    console.log("depois da validação: " + lRet)

    if (lRet == true){

        mensagem('login realizado com sucesso', 'sucesso')
        LimpaInput()
        
    }
})

function GeraObjeto(email,senha) {

    this.email  = email
    this.senha  = senha

}

function adicionarItem(vetorEmails) {

    JSONEmails = JSON.stringify(vetorEmails);
    console.log('JSON: ', JSONEmails);
    localStorage.setItem('Emails', JSONEmails);
    
}
    
function LimpaInput(){

    email.value = ''
    senha.value = ''

    document.getElementById("email").focus();
}

function mensagem(textomsg,tipo) {

    let elementotResultHist = document.querySelector('#divmensagem');

    elementotResultHist.innerHTML = ''

    console.log('entrei na function msg')

    switch (tipo) {
        case 'erro':

            console.log('entrei no case erro')
            document.getElementById("divmensagem").style.display         = 'block'
            elementotResultHist.innerHTML                               += `<h5>${textomsg}</h5>` 
            document.getElementById("divmensagem").style.backgroundColor = '#ff0000'
            document.getElementById("divmensagem").style.color           = '#ffffff'
            
            break;

        case 'alerta':

            console.log('entrei no case alerta')
            document.getElementById("divmensagem").style.display         = 'block'
            elementotResultHist.innerHTML                               += `<h5>${textomsg}</h5>` 
            document.getElementById("divmensagem").style.backgroundColor = '#ffee00'
            document.getElementById("divmensagem").style.color           = '#ffffff'
            
            break;    
    
        default:
            console.log('entrei no case default sucesso')
            document.getElementById("divmensagem").style.display         = 'block'
            elementotResultHist.innerHTML                               += `<h5>${textomsg}</h5>` 
            document.getElementById("divmensagem").style.backgroundColor = '#0026ff'
            document.getElementById("divmensagem").style.color           = '#ffffff'
            break;
    }

    setTimeout(() => {

        document.getElementById("divmensagem").style.display = 'none'
        
    }, 5000);
}