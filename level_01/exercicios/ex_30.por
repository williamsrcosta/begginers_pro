programa
{
	
	real valorProduto = 0.0
	 
	funcao inicio()
	{
		
		escreva("Digite o Valor do Produto:")
		leia(valorProduto)

		se(valorProduto > 0 e valorProduto < 500){

			escreva ("deve vendê-lo com 50% de lucro")

		}senao se(valorProduto >= 500){

			escreva ("deve vendê-lo com 25% de lucro")

		}senao{

			escreva ("Verifique os Valores digitados são negativas ou nulas(0)")

		}

	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 217; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */