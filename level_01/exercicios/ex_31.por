programa
{
	real lado1 =  0.0
	real lado2 =  0.0
	real lado3 =  0.0

	funcao inicio()
	{
		escreva("Primeiro Lado do Triangulo ")
		leia(lado1)

		escreva("Segundo Lado do Triangulo ")
		leia(lado2)

		escreva("Terceiro Lado do Triangulo ")
		leia(lado3)

		se(lado1 == lado2 e lado1 == lado3 e lado2 == lado3){

			escreva("Triangulo Equilatero")

		}senao se(lado1 == lado2 ou lado1 == lado2 ou lado2 == lado3){

			escreva("Triangulo Isosceles")

		}senao{

			escreva("Triangulo Escaleno")

		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 511; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */