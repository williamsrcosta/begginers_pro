programa
{

	/*
	   24 → Uma certa pessoa precisa contar quanto possui em seu cofrinho de moedas. 
	        Construa um algoritmo que receba a quantidade de moedas de 5, 10, 25, 50 centavos 
	        e 1 real e mostre o total.
	*/
	
	real moeda5   = 0.0
	real moeda10  = 0.0
	real moeda25  = 0.0
	real moeda50  = 0.0
	real moeda1   = 0.0
	real    total = 0.0 
	
	funcao inicio()
	{
		escreva("Digite Quantas moedas de 5 centavos você tem: ")
		leia(moeda5)

		escreva("Digite Quantas moedas de 10 centavos você tem: ")
		leia(moeda10)

		escreva("Digite Quantas moedas de 25 centavos você tem: ")
		leia(moeda25)

		escreva("Digite Quantas moedas de 50 centavos você tem: ")
		leia(moeda50)

		escreva("Digite Quantas moedas de 1 Real você tem: ")
		leia(moeda1)
		
		total = (moeda5 * 0.05) + (moeda10 * 0.10) + (moeda25 * 0.25) + (moeda50 * 0.5) + (moeda1 * 1)
		escreva("O Total de Dinheiro do Cofrinho é R$: " + total)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 930; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */