programa
{
	real salInicio     = 0.0
	real sal13porcento = 0.0
	real salfinal      = 0.0
	funcao inicio()
	{
		escreva("Digite seu salário Inicial: ")
		leia(salInicio)

		escreva("Seu salário Inicial é de: " + salInicio + "\n")
		
		sal13porcento = salInicio + ((salInicio * 13) /100)
		escreva("Você recebeu 13% de aumento no total de: " + sal13porcento + "\n")

		salfinal = sal13porcento - ((sal13porcento * 7) /100)
		escreva("Você recebeu 7% de desconto no total de: " + salfinal)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 234; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */