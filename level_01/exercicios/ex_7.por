programa
{

	inteiro idade
	
	funcao inicio()
	{
		escreva("Qual a sua idade: ")
		leia(idade)

		se(idade >= 5 e idade <= 7){
			escreva("Infantil I")

		}senao se(idade >= 8 e idade <= 11){
			escreva("Infantil II")

		}senao se(idade >= 12 e idade <= 14){
			escreva("Juvenil I")

		}senao se(idade >= 15 e idade <= 18){
			escreva("Juvenil II")

		}senao se(idade >= 19 e idade <= 30){
			escreva("Sênior")

		}senao{
			escreva("idade fora da faixa")
		}		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 459; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */