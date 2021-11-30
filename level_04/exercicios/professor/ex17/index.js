let meus_numeros = [1, 4, 16, 22, 37, 59];

let resultados = [];

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
    console.log(`Você ganhou na Mega Sena!!!`);
} else {
    console.log(meus_numeros, resultados)
    console.log(`Você não ganhou na Mega Sena, continue jogando...`);
};