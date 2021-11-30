programa
{
	logico   lContinuar   = falso
	real     vlMussarela  = 0.0
	real     vlCalabresa  = 0.0
	real     vlSorvete    = 0.0
	real     total        = 0.0
	real     totMussarela = 0.0
	real     totCalabresa = 0.0
	real     totSorvete   = 0.0
	inteiro  produto    
	inteiro  vaiLercpf
	cadeia   cpf 
	
	funcao inicio()
	{

		escreva("Bem Vindo a Mercado Carrefour, onde as crianças se Perdem \n")
		escreva("Deseja informar seu CPF: Sim = (1) ↔ Não = (2) ")
		leia(vaiLercpf)

		se(vaiLercpf == 1){

			escreva("Digite seu CPF no Teclado:")
			leia(cpf)

		} 
		
		comprarProdutos()
		passarNoCaixa()
		
	}
	
	funcao comprarProdutos(){
		// inicio calcular votos
		enquanto(lContinuar == falso){

			escreva("Qual a produto você vai adicionar ao carrinho: \n")
			escreva(" Mussarela = (1) ↔ Calabresa = (2) ↔ Sorvete = (3) ↔ Finalizar = (9): ")
			leia(produto)

			escolha(produto){

				caso 1: vlMussarela  = vlMussarela  + 9.9 
				        totMussarela = totMussarela + 1
				        escreva("Você adicionou um Mussarela a Conta \n")
				pare
				caso 2: vlCalabresa   = vlCalabresa   + 13.50
				        totCalabresa = totCalabresa + 1 
				        escreva("Você adicionou um Calabresa a Conta \n")
				pare
				caso 3: vlSorvete  = vlSorvete  + 18.99 
					   totSorvete = totSorvete + 1 
				        escreva("Você adicionou um Sorvete a Conta \n")
				pare
				caso 9: lContinuar = verdadeiro
				pare
				caso contrario: escreva("Valor informado inválido, não foi adicionado nada no carrinho \n")
				pare
			}
		}
		
		total = vlMussarela + vlCalabresa + vlSorvete
	
	}
	
	funcao passarNoCaixa(){

		escreva("\n Seu Cupom fiscal é de: " + "\n \n")

		se (totMussarela > 0) {
			escreva("Quantidade Mussarela: " + totMussarela + " valor total de R$ " + vlMussarela + "\n")	
		}
		
		se (totCalabresa > 0) {
			escreva("Quantidade Calabresa: " + totCalabresa + " valor total de R$ " + vlCalabresa + "\n")	
		}
		
		se(totSorvete > 0) {
			escreva("Quantidade Sorvete: " + totSorvete + " valor total de R$ " + vlSorvete + "\n")	
		}

		escreva("Total Cupom: " + total + "\n \n")

		se(vaiLercpf == 1){

			escreva("Seu CPF é: " + cpf)

		}senao{

			escreva("CPF, não informado, aproveite e doe para o GRENDACC \n")

		} 
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2230; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */