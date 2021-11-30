programa
{
	cadeia nome
	real peso      = 0.0
	real altura    = 0.0
	real imc       = 0.0
	cadeia nomeImc
	
	funcao inicio()
	{
		escreva("Digite seu Nome: ")
		leia(nome)

		escreva("Digite seu Peso: ")
		leia(peso)

		escreva("Digite seu altura: ")
		leia(altura)

		imc = (peso / (altura * altura))

		se(imc < 18.5){
			nomeImc = "Magro"

		}senao se(imc >= 18.5 e imc < 25){
			nomeImc = "Normal"

		}senao se(imc > 25 e imc < 30){
			nomeImc = "Obeso"

		}senao{
			nomeImc = "Obeso Morbido"
		}

		escreva("Seu nome é " + nome + " e seu imc é " + imc + " sua classificação é " + nomeImc)

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 461; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */