programa
{
	real n1
	real n2
	real resultado = 0.0
	funcao inicio()
	{
		escreva("Digite o primeiro numero: ")
		leia(n1)

		escreva("Digite o segundo numero: ")
		leia(n2)

		se(n1 > n2){
			resultado = n1 - n2
			escreva("O numero maior é o primeiro, a diferença entre eles é: " + resultado)

		}senao{
			resultado = n2 - n1
			escreva("O numero maior é o segundo, a diferença entre eles é: " + resultado)
		}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 371; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */