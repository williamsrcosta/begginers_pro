programa
{

	logico  lContinuar = falso
	inteiro n1         = 0
	cadeia  numExtenso
	
	funcao inicio()
	{
		enquanto(lContinuar == falso){

			escreva("Digite um numero de 1 a 5: \n")
			escreva(" Informaremos o numero por extenso: \n")
			leia(n1)

			escolha(n1){

				caso 1: numExtenso = "Um"
				        lContinuar = verdadeiro
				        escreva("O numero que você digitou: " + n1 + " por Extenso é assim: " + numExtenso +" \n")
				pare
				caso 2: numExtenso = "Dois"
				        lContinuar = verdadeiro
				        escreva("O numero que você digitou: " + n1 + " por Extenso é assim: " + numExtenso +" \n")
				pare
				caso 3: numExtenso = "Três"
				        lContinuar = verdadeiro
				        escreva("O numero que você digitou: " + n1 + " por Extenso é assim: " + numExtenso +" \n")
				pare
				caso 4: numExtenso = "Quatro"
				        lContinuar = verdadeiro
				        escreva("O numero que você digitou: " + n1 + " por Extenso é assim: " + numExtenso +" \n")
				pare
				caso 5: numExtenso = "Cinco"
				        lContinuar = verdadeiro
				        escreva("O numero que você digitou: " + n1 + " por Extenso é assim: " + numExtenso +" \n")
				pare
				caso contrario: escreva("Valor informado inválido, precisa ser de 1 a 5 \n")
				pare
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 159; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */