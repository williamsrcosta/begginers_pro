programa
{
	
	inteiro genero = 0
	inteiro idade  = 0
	real    altura = 0.0
	
	funcao inicio()
	{
		escreva("Você é Homem (1) ou Mulher (2) ")
		leia(genero)

		escreva("Qual sua Altura: ")
		leia(altura)

		escreva("Qual sua idade: ")
		leia(idade)

		// inicio masculino
		se(genero == 1){
			
			//inicio regra de altura
			se(altura > 1.70){

				se(idade > 0 e idade <= 20){

					escreva("Peso Ideal Homem = " + ((72.7 * altura) - 58))

				}senao se (idade > 21 e idade <= 39){

					escreva("Peso Ideal Homem = " + ((72.7 * altura) - 53))
		
				}senao{

					escreva("Peso Ideal Homem = " + ((72.7 * altura) - 45))
		
				}

			}senao{

				se(idade <= 40){

					escreva("Peso Ideal Homem = " + ((72.7 * altura) - 50))

				}senao{

					escreva("Peso Ideal Homem = " + ((72.7 * altura) - 58))
		
				}
	
			}
			//final regra de altura
		// final masculino
		// inicio mulher
		}senao{

			//inicio regra de altura
			se(altura > 1.50){

				escreva("Peso Ideal Mulher = " + ((62.1 * altura) - 44.7))

			}senao{

				se(idade >= 35){

					escreva("Peso Ideal Mulher = " + ((62.1 * altura) - 45))

				}senao{

					escreva("Peso Ideal Mulher = " + ((62.1 * altura) - 49))
		
				}
	
			}
			//final regra de altura
		}
		// final mulher
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1252; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */