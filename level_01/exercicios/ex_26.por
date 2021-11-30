programa
{
	cadeia  pessoa1
	cadeia  pessoa2
	cadeia  pessoa3
	cadeia  pessoa4
	cadeia  pessoa5
	cadeia  nomeGenero
	inteiro generoPessoa1 = 0
	inteiro generoPessoa2 = 0
	inteiro generoPessoa3 = 0
	inteiro generoPessoa4 = 0
	inteiro generoPessoa5 = 0
	inteiro homem         = 0
	inteiro mulher        = 0
	
	funcao inicio()
	{

		// inicio pessoa 1
		escreva("Nome Pessoa 1: ")
		leia(pessoa1)

		escreva("Genero da Pessoa 1 ------ Homem(1) Mulher(2): ")
		leia(generoPessoa1)
		
		se(generoPessoa1 == 1){

			nomeGenero = "Homem"

		}senao{

			nomeGenero = "Mulher"

		}

		escreva("Seu nome é " + pessoa1 + " e seu genero é " + nomeGenero + "\n")

		se(generoPessoa1 == 1){

			homem = homem + 1

		}senao{

			mulher = mulher + 1

		}
		// final pessoa 1

		// inicio pessoa 2
		escreva("Nome Pessoa 2: ")
		leia(pessoa2)

		escreva("Genero da Pessoa 2 ------ Homem(1) Mulher(2): ")
		leia(generoPessoa2)

		se(generoPessoa2 == 1){

			nomeGenero = "Homem"

		}senao{

			nomeGenero = "Mulher"

		}

		escreva("Seu nome é " + pessoa2 + " e seu genero é " + nomeGenero + "\n")

		se(generoPessoa2 == 1){

			homem = homem + 1

		}senao{

			mulher = mulher + 1

		}
		// final pessoa 2

		// inicio pessoa 3
		escreva("Nome Pessoa 3: ")
		leia(pessoa3)

		escreva("Genero da Pessoa 3 ------ Homem(1) Mulher(2): ")
		leia(generoPessoa3)

		se(generoPessoa3 == 1){

			nomeGenero = "Homem"

		}senao{

			nomeGenero = "Mulher"

		}

		escreva("Seu nome é " + pessoa3 + " e seu genero é " + nomeGenero + "\n")

		se(generoPessoa3 == 1){

			homem = homem + 1

		}senao{

			mulher = mulher + 1

		}
		// final pessoa 3

		// inicio pessoa 4
		escreva("Nome Pessoa 4: ")
		leia(pessoa4)

		escreva("Genero da Pessoa 4 ------ Homem(1) Mulher(2): ")
		leia(generoPessoa4)

		se(generoPessoa4 == 1){

			nomeGenero = "Homem"

		}senao{

			nomeGenero = "Mulher"

		}

		escreva("Seu nome é " + pessoa4 + " e seu genero é " + nomeGenero + "\n")

		se(generoPessoa4 == 1){

			homem = homem + 1

		}senao{

			mulher = mulher + 1

		}
		// final pessoa 4

		// inicio pessoa 5
		escreva("Nome Pessoa 5: ")
		leia(pessoa5)

		escreva("Genero da Pessoa 5 ------ Homem(1) Mulher(2): ")
		leia(generoPessoa5)

		se(generoPessoa5 == 1){

			nomeGenero = "Homem"

		}senao{

			nomeGenero = "Mulher"

		}

		escreva("Seu nome é " + pessoa5 + " e seu genero é " + nomeGenero + "\n")

		se(generoPessoa5 == 1){

			homem = homem + 1

		}senao{

			mulher = mulher + 1

		}
		// final pessoa 5

		escreva("A quantidade de Homens é igual a " + homem + " e a quantidade de Mulheres é igual a " + mulher)
			

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2485; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */