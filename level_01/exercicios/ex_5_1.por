programa
{
	inclua biblioteca Util --> util
	inclua biblioteca Matematica --> mat

	real moedaDolar
	real moedaReal
	real cotacao
	
	funcao inicio()
	{
		
		escreva("Qual a cotação do dia:")
		leia(cotacao)

		escreva("Quanto dinheiro em Real:")
		leia(moedaReal)

		moedaDolar = moedaReal / cotacao

		escreva("Real convertido para o Dolár é um total de R$:" + mat.arredondar(moedaDolar, 2))
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 74; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */