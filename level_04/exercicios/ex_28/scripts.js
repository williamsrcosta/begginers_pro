const form       = document.forms.dados;
const {num1}     = form;
const {num2}     = form;
const {num3}     = form;
const {num4}     = form;
const {num5}     = form;
const {num6}     = form;
let meus_numeros = []
let resultados   = []
let lRet         = true

document.forms.dados.addEventListener("submit", function(evento){
    
    evento.preventDefault()

    console.log('antes do validar: ' + lRet)
    lRet = Validar()

    console.log('depois do validar: ' + lRet)

    if (lRet == true){

        console.log('entrei no if: ' + lRet)

        let meus_numeros = [num1.value,num2.value,num3.value,num4.value,num5.value,num6.value];

        for (let i = 1; i <= 6; i++) {
            let num_sorteado = Math.trunc(Math.random() * 60)
            // O método Math.trunc() retorna a parte inteira de um número,
            // descartando suas casas decimais.

            if(num_sorteado < 61 && num_sorteado > 0){
                if(resultados.includes(num_sorteado)){
                    resultados.push(num_sorteado + 1);
                } else {
                    resultados.push(num_sorteado);
                };
            };
        };

        meus_numeros = meus_numeros.sort((a, b) => a - b);
        resultados = resultados.sort((a, b) => a - b);

        if(meus_numeros == resultados) {

            document.getElementById('resultado').innerHTML += `<p>Meus Numeros: ${meus_numeros}</p>
                                                            <p>Resultado: ${resultados}</p>
                                                            <p>Mensagem: ${'Você ganhou na Mega Sena!!!'}</p>
                                                            `
            //console.log(`Você ganhou na Mega Sena!!!`);

        } else {
            console.log(meus_numeros, resultados)
            document.getElementById('resultado').innerHTML += `<p>Meus Numeros: ${meus_numeros}</p>
                                                            <p>Resultado: ${resultados}</p>
                                                            <p>Mensagem: ${'Você não ganhou na Mega Sena, continue jogando...'}</p>
                                                            ` 

            //console.log(`Você não ganhou na Mega Sena, continue jogando...`);
        }
    }

    num1.value = ''
    num2.value = ''
    num3.value = ''
    num4.value = ''
    num5.value = ''
    num6.value = ''
    document.getElementById("num1").focus();

})    

function Validar(){

    let n1 = Number(num1.value.replace(',', '.')) 
    let n2 = Number(num2.value.replace(',', '.')) 
    let n3 = Number(num3.value.replace(',', '.')) 
    let n4 = Number(num4.value.replace(',', '.')) 
    let n5 = Number(num5.value.replace(',', '.')) 
    let n6 = Number(num6.value.replace(',', '.')) 

    // inicio validacao numero 1
    if(n1 === n2 || n1 === n3 || n1 === n4 || n1 === n5 || n1 === n6){

        alert('Existem numeros repetidos, não é possivel completar o jogo')
        lRet = false

    }

    if(n1 <= 0){

        alert('Existem numeros zerados ou negativos, não é possivel completar o jogo')
        lRet = false

    }

    if(n1 >= 61){

        alert('Existem numeros maior ou igual a 61, não é possivel completar o jogo')
        lRet = false

    }
    // final validacao numero 1

    // inicio validacao numero 2
    if(n2 === n1 || n2 === n3 || n2 === n4 || n2 === n5 || n2 === n6){

        alert('Existem numeros repetidos, não é possivel completar o jogo')
        lRet = false

    }

    if(n2 <= 0){

        alert('Existem numeros zerados ou negativos, não é possivel completar o jogo')
        lRet = false

    }

    if(n2 >= 61){

        alert('Existem numeros maior ou igual a 61, não é possivel completar o jogo')
        lRet = false

    }
    // final validacao numero 2

    // inicio validacao numero 3
    if(n3 === n1 || n3 === n2 || n3 === n4 || n3 === n5 || n3 === n6){

        alert('Existem numeros repetidos, não é possivel completar o jogo')
        lRet = false

    }

    if(n3 <= 0){

        alert('Existem numeros zerados ou negativos, não é possivel completar o jogo')
        lRet = false

    }

    if(n3 >= 61){

        alert('Existem numeros maior ou igual a 61, não é possivel completar o jogo')
        lRet = false

    }
    // final validacao numero 3

    // inicio validacao numero 4
    if(n4 === n1 || n4 === n2 || n4 === n3 || n4 === n5 || n4 === n6){

        alert('Existem numeros repetidos, não é possivel completar o jogo')
        lRet = false

    }

    if(n4 <= 0){

        alert('Existem numeros zerados ou negativos, não é possivel completar o jogo')
        lRet = false

    }

    if(n4 >= 61){

        alert('Existem numeros maior ou igual a 61, não é possivel completar o jogo')
        lRet = false

    }
    // final validacao numero 4

    // inicio validacao numero 5
    if(n5 === n1 || n5 === n2 || n5 === n3 || n5 === n4 || n5 === n6){

        alert('Existem numeros repetidos, não é possivel completar o jogo')
        lRet = false

    }

    if(n5 <= 0){

        alert('Existem numeros zerados ou negativos, não é possivel completar o jogo')
        lRet = false

    }

    if(n5 >= 61){

        alert('Existem numeros maior ou igual a 61, não é possivel completar o jogo')
        lRet = false

    }
    // final validacao numero 5

    // inicio validacao numero 6
    if(n6 === n1 || n6 === n2 || n6 === n3 || n6 === n4 || n6 === n5){

        alert('Existem numeros repetidos, não é possivel completar o jogo')
        lRet = false

    }

    if(n6 <= 0){

        alert('Existem numeros zerados ou negativos, não é possivel completar o jogo')
        lRet = false

    }

    if(n6 >= 61){

        alert('Existem numeros maior ou igual a 61, não é possivel completar o jogo')
        lRet = false

    }
    // final validacao numero 6

    if (lRet == true){
        return true
    }else{
        return false
    }
       
}