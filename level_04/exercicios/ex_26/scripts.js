let vetores      = ["Otávio", "Gabriel", "Claudemir", "Lucas"];
let qtdPalavras1 = 0
let qtdPalavras2 = 0
let qtdPalavras3 = 0
let qtdPalavras4 = 0
let resultado    = 0

//console.log('vetores: ' + vetores)

vetores.forEach((vetor,index) => {

    switch (Number(index + 1)) {
        case 1:
          qtdPalavras1 = vetor.length
          break;
        case 2:
          qtdPalavras2 = vetor.length
          break;
        case 3:
          qtdPalavras3 = vetor.length
          break;  
        default:
          qtdPalavras4 = vetor.length
      }    
});

//console.log('qtdPalavras1: ' + qtdPalavras1)
//console.log('qtdPalavras2: ' + qtdPalavras2)
//console.log('qtdPalavras3: ' + qtdPalavras3)
//console.log('qtdPalavras4: ' + qtdPalavras4)

resultado = (qtdPalavras1 + qtdPalavras2 + qtdPalavras3 + qtdPalavras4) / 4

console.log('A média de quantidade de palavras é: ' + resultado)