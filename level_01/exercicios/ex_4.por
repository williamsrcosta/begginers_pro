programa
{
	inclua biblioteca Tipos --> tp
	
	cadeia  nome      = ""
	inteiro qtdnotas  = 0
	inteiro numnota   = 0
	real    nota      = 0.0
	real    media     = 0.0
	real    somaMedia = 0.0
	
	funcao inicio()
	{
		
		escreva("Quantas notas você irá lançar: ")
		leia(qtdnotas)

		escreva("Digite o nome do aluno: ")
		leia(nome)
		
		para(inteiro i=0; i < qtdnotas; i++){

			nota    = 0.0
			numnota = i + 1

			escreva("Digite a nota " + tp.inteiro_para_caracter(numnota) + ": ")
			leia(nota)
			
			somaMedia = somaMedia + nota

		}
		
		media = somaMedia / qtdnotas

		escreva("A sua média foi igual: " + media + " para o aluno: " + nome + "\n")

		se(media >= 7 e media <= 10){

			escreva("Aprovado")

		}senao se (media > 0  e media < 7){

			escreva("Reprovado")

		}
		senao{

			escreva("A média não está dentro do range correto de 0 a 10, favor verificar as notas, e refaça o programa")

		}

	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 651; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */