programa
{
	
	/*
		22 → Cinco amigos foram num restaurante mineiro e resolveram dividir a conta total. 
		     O primeiro e segundo amigo irão, juntos, pagar 25%, já o terceiro pagará 10% e o 
		     quarto e quinto juntos, pagarão 65%. Faça um algoritmo que receba o total da conta e 
		     retorne quanto CADA um irá pagar.
		
	*/

	real totalConta = 0.0
	funcao inicio()
	{
		escreva("Qual é o Total da Conta: ")
		leia(totalConta)

		escreva("O primeiro e segunda amigo irão pagar 25% da Conta no total de: " + totalConta * 0.25 + "\n")
		escreva("o terceiro pagará 10% da Conta no total de: "                     + totalConta * 0.10 + "\n")
		escreva("O quarto e quinto juntos, pagarão 65% da Conta no total de: "     + totalConta * 0.65)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 360; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */