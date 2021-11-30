programa
{
	logico   lContinuar      = verdadeiro
	real     vlRefrigerante  = 0.0
	real     vlHamburguer    = 0.0
	real     vlBombom        = 0.0
	real     total           = 0.0
	real     totRefrigerante = 0.0
	real     totHamburguer   = 0.0
	real     totBombom       = 0.0
	caracter produto      
	
	funcao inicio()
	{

		criandoconta()
		totalconta()
		
	}
	
	funcao criandoconta(){
		// inicio calcular votos
		enquanto(lContinuar == verdadeiro){

			escreva("Qual o item a ser adicionado na conta: \n")
			escreva(" Refrigerante = (r) ↔ Hambúrguer = (h) ↔ Bombom = (b) ↔ Finalizar = (f): ")
			leia(produto)

			escolha(produto){

				caso 'r': vlRefrigerante  = vlRefrigerante  + 4 
				          totRefrigerante = totRefrigerante + 1
				          escreva("Você adicionou um Refrigerante a Conta \n")
				pare
				caso 'h': vlHamburguer   = vlHamburguer   + 5.50
				          totHamburguer = totHamburguer + 1 
				          escreva("Você adicionou um Hamburguer a Conta \n")
				pare
				caso 'b': vlBombom  = vlBombom  + 2.5 
						totBombom = totBombom + 1 
				          escreva("Você adicionou um Bombom a Conta \n")
				pare
				caso 'f': lContinuar = falso
				pare
				caso contrario: escreva("Valor informado inválido, não foi somado nada a conta \n")
				pare
			}
		}
		
		total = vlRefrigerante + vlHamburguer + vlBombom
	
	}
	
	funcao totalconta(){

		escreva("\n Sua Comanda é: " + "\n \n")

		se (totRefrigerante > 0) {
			escreva("Quantidade Refrigerante: " + totRefrigerante + " valor total de R$ " + vlRefrigerante + "\n")	
		}

		se (totHamburguer > 0) {
			escreva("Quantidade Hamburguer: " + totHamburguer + " valor total de R$ " + vlHamburguer + "\n")	
		}
		
		se (totBombom > 0) {
			escreva("Quantidade Bombom: " + totBombom + " valor total de R$ " + vlBombom + "\n")	
		}

		escreva("Total Geral da sua conta: " + total + "\n \n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1778; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */