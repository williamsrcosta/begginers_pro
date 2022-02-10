export function mascaraEmail(email) {

    const expressao = /\S+@\S+\.\S+/;

    //console.log('entrei aqui will mascaraEmail')

    if (expressao.test(email.value) && email.value != '') {

        //console.log('entrei no if aqui will mascaraEmail')

        email.classList.add('email-valid');
        email.classList.remove('email-invalid');
        document.getElementById("email").style.backgroundColor = '#1cbb51'

    } else {

        //console.log('entrei no else aqui will mascaraEmail')

        email.classList.add('email-invalid');
        email.classList.remove('email-valid');
        document.getElementById("email").style.backgroundColor = '#bb2f1c'

    }
}

export function mascaraTelefone(telefone) {

    //console.log('entrei aqui will mascaraTelefone')
    //console.log(telefone)

    telefone.value = telefone.value.replace(/\D/g, '')
    telefone.value = telefone.value.replace(/(\d{2})(\d)/  , '($1) $2')
    telefone.value = telefone.value.replace(/(\s\d)(\d)/   , '$1 $2')
    telefone.value = telefone.value.replace(/(\d{4})(\d)/  , '$1-$2')
    telefone.value = telefone.value.replace(/(-\d{4})\d+?$/, '$1')

    return telefone.value
}

export function mascaraCep(cep) {

    console.log('entrei aqui will mascaraCep')
    //console.log(cep)

    cep.value = cep.value.replace(/\D/g, '')
    cep.value = cep.value.replace(/(\d{2})(\d)/  , '$1.$2')
    cep.value = cep.value.replace(/(.\d{3})(\d)/ , '$1-$2')
    cep.value = cep.value.replace(/(-\d{3})\d+?$/, '$1')

    return cep.value
}

export function mascaraRg(rg) {

    console.log('entrei aqui will mascaraRg')
    //console.log(rg)

    rg.value = rg.value.replace(/\D/g, '')
    rg.value = rg.value.replace(/(\d{2})(\d)/  , '$1.$2')
    rg.value = rg.value.replace(/(.\d{3})(\d)/ , '$1.$2')
    rg.value = rg.value.replace(/(.\d{3})(\d)/ , '$1-$2')
    rg.value = rg.value.replace(/(-\d{1})\d+?$/, '$1')

    return rg.value
}

export function mascaraCPF(cpf) {

    console.log('entrei aqui will mascaraCPF')
    //console.log(cpf)

    cpf.value = cpf.value.replace(/\D/g, '')
    cpf.value = cpf.value.replace(/(\d{3})(\d)/  , '$1.$2')
    cpf.value = cpf.value.replace(/(.\d{3})(\d)/ , '$1.$2')
    cpf.value = cpf.value.replace(/(.\d{3})(\d)/ , '$1-$2')
    cpf.value = cpf.value.replace(/(-\d{2})\d+?$/, '$1')

    return rg.value
}