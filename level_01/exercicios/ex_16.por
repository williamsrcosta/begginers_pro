programa
{
	inclua biblioteca Matematica --> mat
	
	real A 
	real B
	real C
	real D
	real F
	real X
	
	funcao inicio()
	{
		escreva("Digite Letra A: ")
		leia(A)
		
		escreva("Digite Letra B: ")
		leia(B)
		
		escreva("Digite Letra C: ")
		leia(C)

		D =  mat.potencia((A + B), 2.0)
		F = mat.potencia((B + C), 2.0)

		X = (D + F) / 2

		escreva("O valor de X: " + X)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 366; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */