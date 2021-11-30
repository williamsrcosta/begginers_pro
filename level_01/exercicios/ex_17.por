programa
{
	real precogasolina   = 0.0
	real dinheiroUsuario = 0.0
	real qtdLitros       = 0.0
	funcao inicio()
	{
		escreva("Digite o Preço da Gasolina: ")
		leia(precogasolina)

		escreva("Digite o Valor que você tem: ")
		leia(dinheiroUsuario)

		qtdLitros = dinheiroUsuario / precogasolina

		escreva("A quantidade de litros que você pode colocar no seu carro é: " + qtdLitros)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 312; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */