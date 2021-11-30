programa
{
	cadeia nome
	real   n1
	real   n2
	real   n3
	real   media
	
	funcao inicio()
	{
		escreva("Digite o seu nome: ")
		leia(nome)
		
		escreva("Digite a primeira nota: ")
		leia(n1)
		
		escreva("Digite a segunda nota: ")
		leia(n2)

		escreva("Digite a terceira nota: ")
		leia(n3)

		media = (n1 + n2 + n3) / 3

		escreva("A sua média foi igual: " + media + " para o aluno: " + nome)

	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 32; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */