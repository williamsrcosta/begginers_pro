const pessoas  = { nome: 'Lucas', idade: 23, profissao: 'Instrutor' }
let stringJson = ''

stringJson = '{'

Object.keys(pessoas).forEach(function(pessoa) {
   
    stringJson += `"${pessoa}":`

    if(typeof(pessoas[pessoa]) === 'string'){

        stringJson += `"${pessoas[pessoa]}":`

    }

    else{
        stringJson += `${pessoas[pessoa]}:`
    }
    

});

stringJson += '}'

console.log(stringJson)