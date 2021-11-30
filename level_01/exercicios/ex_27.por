programa
{
	real valorCarroCusto  = 0.0
	real valorCarroVenda  = 0.0
	real comissaoVendedor = 0.0 
	real ValorCarroFinal  = 0.0
	real ValorLiquido     = 0.0
	 
	funcao inicio()
	{
		escreva("Digite o preço de custo do carro:")
		leia(valorCarroCusto)

		escreva("Digite o preço de venda:")
		leia(valorCarroVenda)

		comissaoVendedor = 3.0 //em porcentagem

		ValorLiquido    = (valorCarroVenda - valorCarroCusto)
		
		escreva("Valor Liquido:" + ValorLiquido + "\n")
		
		ValorCarroFinal = ValorLiquido - ((ValorLiquido * comissaoVendedor) /100)

		escreva("Valor Final:" + ValorCarroFinal + "\n")

		se(ValorCarroFinal > 0){

			escreva ("Parabéns você teve Lucro")

		}senao se(ValorCarroFinal == 0){

			escreva ("Você teve Lucro Nulo")

		}senao{

			escreva ("Você teve Prejuizo")

		}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 468; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */