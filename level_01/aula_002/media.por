programa
{
	real n1
	real n2
	real n3
	real n4
	real media
	
	funcao inicio()
	{
		escreva("Digite a primeira nota: ")
		leia(n1)
		
		escreva("Digite a segunda nota: ")
		leia(n2)

		escreva("Digite a terceira nota: ")
		leia(n3)

		escreva("Digite a quarta nota: ")
		leia(n4)

		media = (n1 + n2 + n3 + n4) / 4

		se(media < 5){
			escreva("A sua média foi igual: " + media + " parabéns você reprovou")
		}
		senao{
			escreva("A sua média foi igual: " + media + " parabéns você aprovou")
		}

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