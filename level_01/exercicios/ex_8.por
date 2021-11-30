programa
{
	logico   lcontinuar = verdadeiro
	inteiro  contador   = 0
	inteiro  refri      = 0
	inteiro  agua       = 0
	inteiro  suco       = 0
	real     porcRefri  = 0.0
	real     porcAgua   = 0.0
	real     porcSuco   = 0.0
	caracter bebida
	
	funcao inicio()
	{
		// inicio calcular bebida
		enquanto(lcontinuar == verdadeiro){

			escreva("Qual bebida você quer: \n")
			escreva(" Refrigerante (R), Água (A) e Suco(S) ou Finalizar(F): ")
			leia(bebida)

			escolha(bebida){

				caso 'R': refri = refri + 1 
				          contador = contador + 1 
				          escreva("Somado um Refrigerante \n")
				pare
				caso 'A': agua = agua + 1 
				          contador = contador + 1 
				          escreva(1) escreva("Somado uma Agua \n")
				pare
				caso 'S': suco = suco + 1 
				          contador = contador + 1 
				          escreva(1) escreva("Somado um Suco \n")
				pare
				caso 'F': lcontinuar = falso
				pare
				caso contrario: escreva("Valor informado inválido, não foi somado a bebida \n")
				pare
			}
		}
		// final calcular bebida

		escreva("contador " + contador + "\n")
		escreva("refri "    + refri  + "\n")
		escreva("agua "     + agua  + "\n")
		escreva("suco "     + suco  + "\n")

		// inicio descobrir porcentagem de cada bebida

		porcRefri = (refri * 100) / contador
	     porcAgua  = (agua * 100) / contador 
	     porcSuco  = (suco * 100) / contador 
   
		// final descobrir porcentagem de cada bebida

		escreva("Refrigerante:" + refri + " unidades = " + porcRefri + "% ↔ Água: " + agua + "unidades = " + porcAgua + "% ↔ Suco: " + suco + "unidades = " + porcSuco + "%")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1391; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */