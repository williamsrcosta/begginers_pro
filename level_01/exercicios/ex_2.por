programa
{
	inclua biblioteca Matematica --> mat
	
	real   raio
	real   diametro
	real   comprimento
	real   area
	
	funcao inicio()
	{
		escreva("Qual o raio da circunferência: ")
		leia(raio)
		
		diametro = 2 * raio

		escreva("Diametro: " + diametro + "\n")

		comprimento = 2 * 3.14 * raio

		escreva("Comprimento: " + diametro + "\n")

		area = 3.14 * mat.potencia(raio, 2)

		escreva("Area: " + area + "\n")

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 100; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */