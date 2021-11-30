programa
{
	inclua biblioteca Calendario --> calen
	
	real jurosDia         = 0.0
	real vlConta          = 0.0
	real juros            = 0.0
	inteiro qtdDiasAtraso = 0
	
	funcao inicio()
	{
		escreva("Qual a Porcentagem de Juros dia em % ")
		leia(jurosDia)

		escreva("Qual o valor da conta ")
		leia(vlConta)

		escreva("Quantos dias de Atraso ")
		leia(qtdDiasAtraso)

		juros = (vlConta * (jurosDia / 100)) + vlConta

		escreva("O juros que precisa ser pago é no valor de: " + juros)
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 370; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */