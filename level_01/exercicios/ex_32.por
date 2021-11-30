programa
{

	logico  lContinuar = falso
	inteiro nivelFunc  = 0
	real    totHoras   = 0.0
	real    vlHoras    = 0.0
	cadeia  numExtenso
	
	funcao inicio()
	{
		escreva("Qual a quantidade de horas Trabalhadas: ")
		leia(totHoras)
		enquanto(lContinuar == falso){

			escreva("Digite o nivel do Funcionario: \n")
			escreva(" Estagiário (1) → R$10 || Júnior (2) → R$20: || Pleno (3) → R$35 || Sênior (4) → R$50 \n")
			leia(nivelFunc)
			
			escolha(nivelFunc){

				caso 1: vlHoras    = 10.0
				        lContinuar = verdadeiro
				        escreva("O Valor a ser pago para o Estagiario é: " + totHoras * vlHoras + "\n")
				pare
				caso 2: vlHoras    = 20.0
				        lContinuar = verdadeiro
				        escreva("O Valor a ser pago para o Júnior é: " + totHoras * vlHoras + "\n")
				pare
				caso 3: vlHoras    = 35.0
				        lContinuar = verdadeiro
				        escreva("O Valor a ser pago para o Pleno é: " + totHoras * vlHoras + "\n")
				pare
				caso 4: vlHoras    = 50.0
				        lContinuar = verdadeiro
				        escreva("O Valor a ser pago para o Sênior é: " + totHoras * vlHoras + "\n")
				pare
				caso contrario: escreva("Valor informado inválido, precisa ser de 1 a 4 \n")
				pare
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1210; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */