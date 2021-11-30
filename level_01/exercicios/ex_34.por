programa
{
	inteiro n1        = 0
	real    resultado = 0.0
	
	funcao inicio()
	{
		escreva("Digite um numero divisel por dois: ")
		leia(n1)

		se(n1 % 2 == 0){

			resultado = n1 / 2

			escreva("O resultado da divisão é: " + resultado)

		}senao{

			escreva("O numero não é divisivel por 2, favor verificar!!!")

		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 146; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */