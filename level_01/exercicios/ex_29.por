programa
{

	logico  lContinuar = falso
	inteiro n1         = 0
	cadeia  mesExtenso
	
	funcao inicio()
	{
		enquanto(lContinuar == falso){

			escreva("Digite o valor numérico de um mês de 1 a 12: \n")
			escreva(" Informaremos o mês por extenso: \n")
			leia(n1)

			escolha(n1){

				caso 1: mesExtenso = "Janeiro"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 2: mesExtenso = "Fevereiro"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 3: mesExtenso = "Março"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 4: mesExtenso = "Abril"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 5: mesExtenso = "Maio"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 6: mesExtenso = "Junho"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 7: mesExtenso = "Julho"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 8: mesExtenso = "Agosto"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 9: mesExtenso = "Setembro"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 10: mesExtenso = "Outubro"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 11: mesExtenso = "Novembro"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso 12: mesExtenso = "Dezembro"
				        lContinuar = verdadeiro
				        escreva("O mês que você digitou: " + n1 + " por Extenso é assim: " + mesExtenso +" \n")
				pare
				caso contrario: escreva("Valor informado inválido, precisa ser de 1 a 12 \n")
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
 * @POSICAO-CURSOR = 2533; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */