programa
{
	/*
	   23 → Calcule a quantidade total de refrigerante após receber dados do usuário. Os dados são:
		   Quantas latas de 350ml o usuário possui;
		   Quantas garrafas de 600ml o usuário possui;
		   Quantas garrafas de 1 litro o usuário possui;
	 	   Quantas garrafas de 2 litros o usuário possui;*/
	
	inteiro latas       = 0
	inteiro garrafas600 = 0
	inteiro garrafas1   = 0
	inteiro garrafas2   = 0
	real    total       = 0.0 
	
	funcao inicio()
	{
		escreva("Digite Quantas latas de 350ml o usuário possui: ")
		leia(latas)

		escreva("Digite Quantas garrafas de 600ml o usuário possui: ")
		leia(garrafas600)

		escreva("Digite Quantas garrafas de 1 litro o usuário possui: ")
		leia(garrafas1)

		escreva("Digite Quantas garrafas de 2 litro o usuário possui: ")
		leia(garrafas2)

		total = latas + garrafas600 + (garrafas1 * 1000) + (garrafas2 * 2000)

		escreva("O Total de Refrigerante é: " + (total / 1000) + " em litros")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 447; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */