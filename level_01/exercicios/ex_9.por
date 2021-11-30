programa
{
	inclua biblioteca Matematica --> mat
	
	logico  lcontinuar  = verdadeiro
	inteiro candidato   = 0
	real    joao        = 0.0
	real    marcia      = 0.0
	real    clovis      = 0.0
	real    roberta     = 0.0
	real    nulo        = 0.0
	real    branco      = 0.0
	real    total       = 0.0
	real    porcJoao    = 0.0
	real    porcMarcia  = 0.0
	real    porcClovis  = 0.0
	real    porcRoberta = 0.0
	real    porcNulo    = 0.0
	real    porcBranco  = 0.0
	
	funcao inicio()
	{

		votos()
		apuracao()
		
	}
	
	funcao votos(){
		// inicio calcular votos
		enquanto(lcontinuar == verdadeiro){

			escreva("Qual candidato você quer votar: \n")
			escreva(" João = 1 ↔ Marcia = 2 ↔ Clóvis = 3 ↔ Roberta = 4 ↔ Voto nulo = 5 ↔ Em branco = 6 ou Finalizar = 9: ")
			leia(candidato)

			escolha(candidato){

				caso 1: joao = joao + 1 
				        escreva("Você votou no João \n")
				pare
				caso 2: marcia = marcia + 1 
				        escreva(1) escreva("Você votou no Marcia \n")
				pare
				caso 3: clovis = clovis + 1 
				        escreva(1) escreva("Você votou no Clovis \n")
				pare
				caso 4: roberta = roberta + 1 
				        escreva(1) escreva("Você votou no Roberta \n")
				pare
				caso 5: nulo = nulo + 1 
				        escreva(1) escreva("Você votou no Nulo \n")
				pare
				caso 6: branco = branco + 1 
				        escreva(1) escreva("Você votou no Branco \n")
				pare
				caso 9: lcontinuar = falso
				pare
				caso contrario: escreva("Valor informado inválido, não foi somado a bebida \n")
				pare
			}
		}
		// final calcular votos

		total = joao + marcia + clovis + roberta + nulo + branco
	
	}
	
	funcao apuracao(){

		/*
		escreva("total "   + total   + "\n")
		escreva("joao "    + joao    + "\n")
		escreva("marcia "  + marcia  + "\n")
		escreva("clovis "  + clovis  + "\n")
		escreva("roberta " + roberta + "\n")
		escreva("nulo "    + nulo    + "\n")
		escreva("branco "  + branco  + "\n")
		*/
		// inicio descobrir porcentagem de cada bebida

		porcJoao    = (joao    * 100) / total
	     porcMarcia  = (marcia  * 100) / total 
	     porcClovis  = (clovis  * 100) / total 
	     porcRoberta = (roberta * 100) / total
	     porcNulo    = (nulo    * 100) / total 
	     porcBranco  = (branco  * 100) / total 
   
		// final descobrir porcentagem de cada bebida
		mat.arredondar(porcJoao, 2)
		escreva("Votos Apurados: " + total + "\n")
		escreva("João teve um total de :"    + joao    + " votos, " + mat.arredondar(porcJoao, 2)    + "% apurados \n")
		escreva("Marcia teve um total de :"  + marcia  + " votos, " + mat.arredondar(porcMarcia, 2)  + "% apurados \n")
		escreva("Clovis teve um total de :"  + clovis  + " votos, " + mat.arredondar(porcClovis, 2)  + "% apurados \n")
		escreva("Roberta teve um total de :" + roberta + " votos, " + mat.arredondar(porcRoberta, 2) + "% apurados \n")
		escreva("Nulo teve um total de :"    + nulo    + " votos, " + mat.arredondar(porcNulo, 2)    + "% apurados \n")
		escreva("Branco teve um total de :"  + branco  + " votos, " + mat.arredondar(porcBranco, 2)  + "% apurados ")

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2338; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */