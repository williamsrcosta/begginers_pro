programa
{
	logico   lContinuar   = verdadeiro
	real     vlTenis      = 0.0
	real     vlCamisetas  = 0.0
	real     vlBones      = 0.0
	real     total        = 0.0
	real     totTenis     = 0.0
	real     totCamisetas = 0.0
	real     totBones     = 0.0
	caracter produto      
	
	funcao inicio()
	{

		vendas()
		totalvendas()
		
	}
	
	funcao vendas(){
		// inicio calcular votos
		enquanto(lContinuar == verdadeiro){

			escreva("Qual o item a ser adicionado vendido: \n")
			escreva(" Tenis = (t) ↔ Camisetas = (c) ↔ Bones = (b) ↔ Finalizar = (f): ")
			leia(produto)

			escolha(produto){

				caso 't': vlTenis  = vlTenis  + 60 
				          totTenis = totTenis + 1
				          escreva("Você adicionou um Tenis a Conta \n")
				pare
				caso 'c': vlCamisetas   = vlCamisetas   + 15
				          totCamisetas = totCamisetas + 1 
				          escreva("Você adicionou um Camisetas a Conta \n")
				pare
				caso 'b': vlBones  = vlBones  + 20
						totBones = totBones + 1 
				          escreva("Você adicionou um Bones a Conta \n")
				pare
				caso 'f': lContinuar = falso
				pare
				caso contrario: escreva("Valor informado inválido, não foi somado nada a conta \n")
				pare
			}
		}
		
		total = vlTenis + vlCamisetas + vlBones
	
	}
	
	funcao totalvendas(){

		escreva("\n Suas Vendas foram: " + "\n \n")

		se (totTenis > 0) {
			escreva("Quantidade Tenis: " + totTenis + " valor total de R$ " + vlTenis + "\n")	
		}

		se (totCamisetas > 0) {
			escreva("Quantidade Camisetas: " + totCamisetas + " valor total de R$ " + vlCamisetas + "\n")	
		}
		
		se (totBones > 0) {
			escreva("Quantidade Bones: " + totBones + " valor total de R$ " + vlBones + "\n")	
		}

		escreva("Total Geral da sua conta: " + total + "\n \n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1427; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */