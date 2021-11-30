programa
{
	real    n1           = 0.0
	real    n2           = 0.0
	real    n3           = 0.0
	real    p1           = 0.0
	real    p2           = 0.0
	real    p3           = 0.0
	real    mediapondera = 0.0
	real    medianormal  = 0.0
	inteiro qualMedia    = 0
	logico  digitouCerto = falso
	logico  n1EstaCerto  = falso
	logico  n2EstaCerto  = falso
	logico  n3EstaCerto  = falso
	logico  p1EstaCerto  = falso
	logico  p2EstaCerto  = falso
	logico  p3EstaCerto  = falso
	funcao inicio()
	{
		enquanto(n1EstaCerto == falso){

			escreva("Digite a primeira nota: ")
			leia(n1)

			se(n1 >= 0 e n1 <= 10){

				n1EstaCerto = verdadeiro

			}senao{
				escreva("Digite uma nota válida entre 0 a 10, favor verificar. \n")
			}
		}

		enquanto(n2EstaCerto == falso){

			escreva("Digite a segunda nota: ")
			leia(n2)

			se(n2 >= 0 e n2 <= 10){

				n2EstaCerto = verdadeiro

			}senao{
				escreva("Digite uma nota válida entre 0 a 10, favor verificar. \n")
			}

		}

		enquanto(n3EstaCerto == falso){

			escreva("Digite a terceira nota: ")
			leia(n3)

			se(n3 >= 0 e n3 <= 10){

				n3EstaCerto = verdadeiro

			}senao{
				escreva("Digite uma nota válida entre 0 a 10, favor verificar. \n")
			}

		}
		
		escreva("Qual Media deseja calcular?: \n")
		enquanto(digitouCerto == falso){
		
			escreva("Digite (1) - Media Ponderada || (2) - Media Aritmética: ")
			leia(qualMedia)

			escolha(qualMedia){

			caso 1: digitouCerto = verdadeiro
			pare
			caso 2: digitouCerto = verdadeiro
			pare
			caso contrario: escreva("Você digitou o numero errado: " + qualMedia + "\n")
			                escreva("Digite o numero correto" + "\n")
			pare
			}
		}

		se(qualMedia == 1){

			enquanto(p1EstaCerto == falso){

				escreva("Digite o primeiro Peso: ")
				leia(p1)
	
				se(p1 >= 0 e p1 <= 100){
	
					p1EstaCerto = verdadeiro
	
				}senao{
					escreva("Digite um peso válido entre 0 a 10, favor verificar. \n")
				}
			}
	
			enquanto(p2EstaCerto == falso){
	
				escreva("Digite o segundo peso: ")
				leia(p2)
	
				se(p2 >= 0 e p2 <= 100){
	
					p2EstaCerto = verdadeiro
	
				}senao{
					escreva("Digite uma peso válido entre 0 a 10, favor verificar. \n")
				}
	
			}
	
			enquanto(p3EstaCerto == falso){
	
				escreva("Digite o terceiro peso: ")
				leia(p3)
	
				se(p3 >= 0 e p3 <= 100){
	
					p3EstaCerto = verdadeiro
	
				}senao{
					escreva("Digite uma nota válida entre 0 a 10, favor verificar. \n")
				}
	
			}

			mediapondera = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3)
			escreva("A média Ponderada é de: " + mediapondera)

		}senao{

			medianormal = (n1 + n2 + n3) / 3
			escreva("A média Aritmética é de: " + medianormal)

		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2435; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */