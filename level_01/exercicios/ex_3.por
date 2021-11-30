programa
{
	inclua biblioteca Texto --> txt
	
	
	cadeia  nome
	inteiro quant
	
	funcao inicio()
	{
		escreva("Digite o nome: ")
		leia(nome)

		quant = txt.numero_caracteres(nome)

		escreva("Quantidade de letras: " + quant + "\n")

		para(inteiro i=0; i < quant; i++){
			
			escreva(txt.obter_caracter(nome, i) + "\n")

		}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 331; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */