programa
{

	real n1
	real n2
	inteiro operacao
	real resultado = 0.0
	
	funcao inicio()
	{
		escreva("Digite o Primeiro Numero: ")
		leia(n1)

		escreva("Digite o Segundo Numero: ")
		leia(n2)

		escreva("Digite a operação desejada da calculadora \n")
		escreva("1 = adição ↔ 2 = subtração ↔ 3 = multiplicação ↔ 4 = divisão \n")
		leia(operacao)

		escolha(operacao){

			caso 1: resultado = n1 + n2
			pare
			caso 2: resultado = n1 - n2
			pare
			caso 3: resultado = n1 * n2
			pare
			caso contrario: resultado = n1 / n2
			pare
		}

		escreva("O resultado da calculadora é: " + resultado)	
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 243; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */