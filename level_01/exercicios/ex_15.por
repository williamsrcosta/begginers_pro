programa
{
	
	real    not1          = 0.0
	real    ex1           = 0.0
	real    sem1          = 0.0
	real    p1            = 0.0
	real    p2            = 0.0
	real    p3            = 0.0
	real    mediapondera  = 0.0
	logico  digitouCerto  = falso
	logico  not1EstaCerto = falso
	logico  ext1EstaCerto = falso
	logico  sem1EstaCerto = falso
	
	funcao inicio()
	{
		enquanto(not1EstaCerto == falso){

			escreva("Digite a nota com peso de 50%: ")
			leia(not1)

			se(not1 >= 0 e not1 <= 10){

				not1EstaCerto = verdadeiro

			}senao{
				escreva("Digite uma nota válida entre 0 a 10, favor verificar. \n")
			}
		}

		enquanto(ext1EstaCerto == falso){

			escreva("Digite a nota do exercicio com peso de 25%: ")
			leia(ex1)

			se(ex1 >= 0 e ex1 <= 10){

				ext1EstaCerto = verdadeiro

			}senao{
				escreva("Digite uma nota válida entre 0 a 10, favor verificar. \n")
			}

		}

		enquanto(sem1EstaCerto == falso){

			escreva("Digite a nota do seminário com peso 25%: ")
			leia(sem1)

			se(sem1 >= 0 e sem1 <= 10){

				sem1EstaCerto = verdadeiro

			}senao{
				escreva("Digite uma nota válida entre 0 a 10, favor verificar. \n")
			}

		}

		p1           = 50.0
		p2           = 25.0
		p3           = 25.0
		mediapondera = ((not1 * p1) + (ex1 * p2) + (sem1 * p3)) / (p1 + p2 + p3) 
		escreva("A média Ponderada é de: " + mediapondera + "\n")

		se(mediapondera >= 9){
			escreva("Você foi aprovado nota A")

		}senao se(mediapondera >= 8 e mediapondera < 9){
			escreva("Você foi aprovado nota B")
			
		}senao se(mediapondera >= 6.5 e mediapondera < 8){
			escreva("Você foi aprovado nota C")
			
		}senao se(mediapondera >= 5 e mediapondera < 6.5){
			escreva("Você foi Reprovado nota D")
			
		}senao se(mediapondera < 5){
			escreva("Você foi Reprovado nota E")
			
		}senao{

		}

		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1348; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */