programa
{
	real precogasolina = 0.0
	real mediaDoCarro  = 0.0
	real kmdia         = 0.0
	real kmsemana      = 0.0
	real consumoDiario = 0.0
	real qtdLitros     = 0.0
	funcao inicio()
	{
		escreva("Digite o Preço da Gasolina: ")
		leia(precogasolina)

		escreva("Digite a média do carro (quantos km faz por litro de gasolina): ")
		leia(mediaDoCarro)

		escreva("Digite quantos km anda por dia: ")
		leia(kmdia)

		escreva("quantos dias por semana anda com o carro: ")
		leia(kmsemana)

		consumoDiario = (kmdia / mediaDoCarro) * precogasolina
		
		escreva("Seu consumo diaria é: "  + consumoDiario            + "\n")
		escreva("Seu consumo semanal é: " + consumoDiario * kmsemana + "\n")
		escreva("Seu consumo mensal é: "  + consumoDiario * 30       + "\n")
		escreva("Seu consumo anual é: "   + consumoDiario * 365      + "\n")
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 489; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */