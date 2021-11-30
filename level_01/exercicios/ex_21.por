programa
{
	/*
	  21 → Calcule o peso ideal de uma pessoa a partir de seu gênero e sua altura. 
		  Considere as seguintes fórmulas:
		  Homem: (72.7 * altura) - 58;
		  Mulher: (62.1 * altura) - 44.7;
	*/
	
	inteiro genero = 0
	real    altura = 0.0
	
	funcao inicio()
	{
		escreva("Você é Homem (1) ou Mulher (2) ")
		leia(genero)

		escreva("Qual sua Altura: ")
		leia(altura)

		se(genero == 1){

			escreva("Peso Ideal Homem = " + ((72.7 * altura) - 58))

		}senao{

			escreva("Peso Ideal Mulher = " + ((62.1 * altura) - 44.7))

		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 0; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */