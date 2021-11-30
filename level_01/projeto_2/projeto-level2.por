programa{

	cadeia  primeira_pergunta   = ""
	cadeia  correta_1           = ""
	cadeia  errada1_1           = ""
	cadeia  errada2_1           = ""
  	cadeia  segunda_pergunta    = ""
	cadeia  correta_2           = ""
	cadeia  errada1_2           = ""
	cadeia  errada2_2           = ""
	cadeia  errada3_2           = ""
  	cadeia  terceira_pergunta   = ""
	cadeia  correta_3           = ""
	cadeia  errada1_3           = ""
	cadeia  errada2_3           = ""
	cadeia  errada3_3           = ""
  	cadeia  quarta_pergunta     = ""
	cadeia  correta_4           = ""
	cadeia  errada1_4           = ""
	cadeia  errada2_4           = ""
  	cadeia  quinta_pergunta     = ""
	cadeia  correta_5           = ""
	cadeia  errada1_5           = ""
	cadeia  errada2_5           = ""
	cadeia  errada3_5           = ""
	cadeia  sexta_pergunta      = ""
	cadeia  correta_6           = ""
	cadeia  errada1_6           = ""
	cadeia  errada2_6           = ""
	cadeia  errada3_6           = ""
  	cadeia  setima_pergunta     = ""
	cadeia  correta_7           = ""
	cadeia  errada1_7           = ""
	cadeia  errada2_7           = ""
	cadeia  errada3_7           = ""
  	cadeia  oitava_pergunta     = ""
	cadeia  correta_8           = ""
	cadeia  errada1_8           = ""
	cadeia  errada2_8           = ""
	cadeia  errada3_8           = ""
  	cadeia  nona_pergunta       = ""
	cadeia  correta_9           = ""
	cadeia  errada1_9           = ""
	cadeia  errada2_9           = ""
  	cadeia  decima_pergunta     = ""
  	cadeia  correta_10          = ""
  	cadeia  errada1_10          = ""
  	cadeia  errada2_10          = ""
  	cadeia  errada3_10          = ""
  	inteiro desejaFinalizarQuiz = 0
	inteiro questoesCorretas    = 0 
	inteiro questoesRespondidas = 0	
	inteiro questoesErradas     = 0	
	inteiro resposta            = 0
	inteiro queroJogar          = 0
	logico  aguardandoResposta  = falso
	logico  desejaJogar         = verdadeiro
	logico  vaiParaProximo      = verdadeiro
	logico  sairAntes           = falso
  
	funcao inicio(){

		enquanto(desejaJogar == verdadeiro){

			escreva("\n")
			escreva("Você quer jogar o Quiz: \n")
			escreva("Sim (1), Não(9): ")
			leia(queroJogar)

			escolha(queroJogar){

				caso 1: desejaJogar = verdadeiro
					   questoesRespondidas = 0
					   questoesCorretas    = 0
					   questoesErradas     = 0
					   escreva("\n")
					   perguntas()
					   fazerprova()
					   resultadoquiz()
				pare
				caso 9: desejaJogar = falso
					   escreva("Que pena, nos vemos na próxima! \n")
				pare
				caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
				pare
			}

		}
	}
	
	funcao perguntas(){
	
		primeira_pergunta = "Observe o array → numeros = [2, 4, 6, 8, 10], agora observe o loop → for (i = 0; i < numeros.length; i++) { imprima(numeros[i]); }, com esse trecho nós temos o seguinte: 2, 3, 4, 6, 8, 10, bacana, e se quisermos o resultado como: 1, 3, 5, 7, 9? Como seria o código?"
		correta_1         = "for (i = 0; i < numeros.length; i++) { imprima(numeros[i]-1); }"
		errada1_1         = "for (i = 0; i < numeros.length; i++) { imprima(1, 3, 5, 7, 9); }"
		errada2_1         = "for (i = 0; i < numeros.length; i++) { imprima(numeros[i] - - 1); }"

		segunda_pergunta = "O que é um algoritmo?"
		correta_2 = "Um conjunto de instruções ordenadas de forma lógica voltada a resolver um problema."
		errada1_2 = "Uma função matemática"
		errada2_2 = "Um método JavaScript"
		errada3_2 = "Um método do Potugol"
		
		terceira_pergunta = "O que é programar?"
		correta_3 = "Unir o pensamento a uma linguagem de programação e resolver problemas."
		errada1_3 = "Escreve códigos, letrinhas coloridas na tela"
		errada2_3 = "Criar programas legais"
		errada3_3 = "Se sentir mais inteligente que as outras pessoas"
		
		quarta_pergunta = "Observe esse array: ['maçã', 'limão', 'laranja', 'mamão'], em qual posição encontramos o limão?"
		correta_4 = "Posição 1"
		errada1_4 = "Posição 2"
		errada2_4 = "Posição 3"
		
		quinta_pergunta = "De forma sucinta, o que é uma variável?"
		correta_5 = "Uma variável é um espaço na memória do computador destinado a um dado que é alterado enquanto um programa é executado."
		errada1_5 = "Uma variável é um espaço na tela do computador destinado a um dado que é alterado enquanto um programa é executado."
		errada2_5 = "Uma variável é um espaço na memória do computador onde guardamos informações através da inserção manual, é preciso abrir o computador e inserir informações com ferramentas específicas."
		errada3_5 = "É tudo o que o usuário nos informa afim de fazer sentido o uso do programa em questão."
	  	
		sexta_pergunta = "Na programação, para que serve o sinal de =?"
		correta_6 = "Atribuir um valor"
		errada1_6 = "Fazer comparações"
		errada2_6 = "Criar variáveis"
		errada3_6 = "Criar funções"
		
		setima_pergunta = "Observe o seguinte trecho: 'Pegar o pão, pegar uma faca, cortar o pão ao meio, pegar a manteiga na geladeira, abrir o pote de manteiga, pegar um pouco de manteiga com a faca, passar a manteiga no pão', o que temos aqui é algo parecido com:"
		correta_7 = "Um algoritmo"
		errada1_7 = "Arrays"
		errada2_7 = "Variáveis"
		errada3_7 = "Um loop"
		
		oitava_pergunta = "Na programação, para que serve o sinal de ==?"
		correta_8 = "Fazer comparações de igualdade"
		errada1_8 = "Atribuir um valor"
		errada2_8 = "Criar variáveis"
		errada3_8 = "Criar funções"
		
		nona_pergunta = "O que é o Portugol?"
		correta_9 = "Uma linguagem usada de forma didática para que as pessoas aprendam a programar de forma mais amigável."
		errada1_9 = "Uma linguagem de programação muito poderosa e muito usada em sistemas em produção."
		errada2_9 = "Uma linguagem de programação voltada ao desenvolvimento web."
	
		decima_pergunta = "O que faz um sistema de arquivos?"
		correta_10 = "Permite ao sistema operacional ter acesso e controlar os dados gravados no disco"
		errada1_10 = "Arquivos"
		errada2_10 = "Não faz nada de muito relevante para um sistema operacional"
		errada3_10 = "É responsável por fazer o gerenciamento do hardware de forma com que o usuário final apenas interaja com uma tela bonita e insira comandos"
		
	}

	funcao fazerprova(){

		//Inicio Pergunta 1
		aguardandoResposta  = falso
		vaiParaProximo      = verdadeiro
		sairAntes           = falso
		resposta            = 0
		desejaFinalizarQuiz = 0
		enquanto(aguardandoResposta == falso){

			escreva("Pergunta 1: " + primeira_pergunta + "\n")
			escreva("A-) " + correta_1 + "\n")
			escreva("B-) " + errada1_1 + "\n")
			escreva("C-) " + errada2_1 + "\n")
			escreva("Digite sua resposta: \n")
			escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3):")
			leia(resposta)

			escolha(resposta){

				caso 1: aguardandoResposta  = verdadeiro
					   questoesRespondidas = questoesRespondidas + 1
					   questoesCorretas    = questoesCorretas    + 1
				pare
				caso 2: aguardandoResposta  = verdadeiro
					   questoesRespondidas = questoesRespondidas + 1
					   questoesErradas     = questoesErradas + 1
				pare
				caso 3: aguardandoResposta  = verdadeiro
					   questoesRespondidas = questoesRespondidas + 1
					   questoesErradas     = questoesErradas + 1
				pare
				caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
				pare
			}
		}

		enquanto(sairAntes == falso){
				
				escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
				leia(desejaFinalizarQuiz)

				escolha(desejaFinalizarQuiz){

				caso 1: vaiParaProximo = falso
				        sairAntes      = verdadeiro
				        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
				pare
				caso 2: vaiParaProximo = verdadeiro
				        sairAntes      = verdadeiro  
				pare
				caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
				pare
			}
		}
		//Final Pergunta 1

		//Inicio Pergunta 2
		se(vaiParaProximo == verdadeiro){
		
			aguardandoResposta  = falso
			vaiParaProximo      = verdadeiro
			sairAntes           = falso
			resposta            = 0
			desejaFinalizarQuiz = 0
			enquanto(aguardandoResposta == falso){
	
				escreva("Pergunta 2: " + segunda_pergunta + "\n")
				escreva("A-) " + correta_2 + "\n")
				escreva("B-) " + errada1_2 + "\n")
				escreva("C-) " + errada2_2 + "\n")
				escreva("D-) " + errada3_2 + "\n")
				escreva("Digite sua resposta: \n")
				escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3), Pergunta D (4):")
				leia(resposta)
	
				escolha(resposta){
	
					caso 1: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesCorretas    = questoesCorretas    + 1
					pare
					caso 2: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 3: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 4: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1	   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
	
			enquanto(sairAntes == falso){
					
					escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
					leia(desejaFinalizarQuiz)
	
					escolha(desejaFinalizarQuiz){
	
					caso 1: vaiParaProximo = falso
					        sairAntes      = verdadeiro
					        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
					pare
					caso 2: vaiParaProximo = verdadeiro
					        sairAntes      = verdadeiro   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
		}
		//Final Pergunta 2

		//Inicio Pergunta 3
		se(vaiParaProximo == verdadeiro){
		
			aguardandoResposta  = falso
			vaiParaProximo      = verdadeiro
			sairAntes           = falso
			resposta            = 0
			desejaFinalizarQuiz = 0
			enquanto(aguardandoResposta == falso){
	
				escreva("Pergunta 3: " + terceira_pergunta + "\n")
				escreva("A-) " + correta_3 + "\n")
				escreva("B-) " + errada1_3 + "\n")
				escreva("C-) " + errada2_3 + "\n")
				escreva("D-) " + errada3_3 + "\n")
				escreva("Digite sua resposta: \n")
				escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3), Pergunta D (4):")
				leia(resposta)
	
				escolha(resposta){
	
					caso 1: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesCorretas    = questoesCorretas    + 1
					pare
					caso 2: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 3: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 4: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
	
			enquanto(sairAntes == falso){
					
					escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
					leia(desejaFinalizarQuiz)
	
					escolha(desejaFinalizarQuiz){
	
					caso 1: vaiParaProximo = falso
					        sairAntes      = verdadeiro
					        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
					pare
					caso 2: vaiParaProximo = verdadeiro
					        sairAntes      = verdadeiro    
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
		}
		//Final Pergunta 3
		
		//Inicio Pergunta 4
		se(vaiParaProximo == verdadeiro){
		
			aguardandoResposta  = falso
			vaiParaProximo      = verdadeiro
			sairAntes           = falso
			resposta            = 0
			desejaFinalizarQuiz = 0
			enquanto(aguardandoResposta == falso){
	
				escreva("Pergunta 4: " + quarta_pergunta + "\n")
				escreva("A-) " + correta_4 + "\n")
				escreva("B-) " + errada1_4 + "\n")
				escreva("C-) " + errada2_4 + "\n")
				escreva("Digite sua resposta: \n")
				escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3):")
				leia(resposta)
	
				escolha(resposta){
	
					caso 1: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesCorretas    = questoesCorretas    + 1
					pare
					caso 2: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 3: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
	
			enquanto(sairAntes == falso){
					
					escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
					leia(desejaFinalizarQuiz)
	
					escolha(desejaFinalizarQuiz){
	
					caso 1: vaiParaProximo = falso
					        sairAntes      = verdadeiro
					        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
					pare
					caso 2: vaiParaProximo = verdadeiro
					        sairAntes      = verdadeiro
					        
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
		}
		//Final Pergunta 4

		//Inicio Pergunta 5
		se(vaiParaProximo == verdadeiro){
		
			aguardandoResposta  = falso
			vaiParaProximo      = verdadeiro
			sairAntes           = falso
			resposta            = 0
			desejaFinalizarQuiz = 0
			enquanto(aguardandoResposta == falso){
	
				escreva("Pergunta 5: " + quinta_pergunta + "\n")
				escreva("A-) " + correta_5 + "\n")
				escreva("B-) " + errada1_5 + "\n")
				escreva("C-) " + errada2_5 + "\n")
				escreva("D-) " + errada3_5 + "\n")
				escreva("Digite sua resposta: \n")
				escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3), Pergunta D (4):")
				leia(resposta)
	
				escolha(resposta){
	
					caso 1: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesCorretas    = questoesCorretas    + 1
					pare
					caso 2: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 3: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 4: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1	   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
	
			enquanto(sairAntes == falso){
					
					escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
					leia(desejaFinalizarQuiz)
	
					escolha(desejaFinalizarQuiz){
	
					caso 1: vaiParaProximo = falso
					        sairAntes      = verdadeiro
					        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
					pare
					caso 2: vaiParaProximo = verdadeiro
					        sairAntes      = verdadeiro   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
		}
		//Final Pergunta 5

		//Inicio Pergunta 6
		se(vaiParaProximo == verdadeiro){
		
			aguardandoResposta  = falso
			vaiParaProximo      = verdadeiro
			sairAntes           = falso
			resposta            = 0
			desejaFinalizarQuiz = 0
			enquanto(aguardandoResposta == falso){
	
				escreva("Pergunta 6: " + sexta_pergunta + "\n")
				escreva("A-) " + correta_6 + "\n")
				escreva("B-) " + errada1_6 + "\n")
				escreva("C-) " + errada2_6 + "\n")
				escreva("D-) " + errada3_6 + "\n")
				escreva("Digite sua resposta: \n")
				escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3), Pergunta D (4):")
				leia(resposta)
	
				escolha(resposta){
	
					caso 1: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesCorretas    = questoesCorretas    + 1
					pare
					caso 2: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 3: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 4: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1	   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
	
			enquanto(sairAntes == falso){
					
					escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
					leia(desejaFinalizarQuiz)
	
					escolha(desejaFinalizarQuiz){
	
					caso 1: vaiParaProximo = falso
					        sairAntes      = verdadeiro
					        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
					pare
					caso 2: vaiParaProximo = verdadeiro
					        sairAntes      = verdadeiro   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
		}
		//Final Pergunta 6

		//Inicio Pergunta 7
		se(vaiParaProximo == verdadeiro){
		
			aguardandoResposta  = falso
			vaiParaProximo      = verdadeiro
			sairAntes           = falso
			resposta            = 0
			desejaFinalizarQuiz = 0
			enquanto(aguardandoResposta == falso){
	
				escreva("Pergunta 7: " + setima_pergunta + "\n")
				escreva("A-) " + correta_7 + "\n")
				escreva("B-) " + errada1_7 + "\n")
				escreva("C-) " + errada2_7 + "\n")
				escreva("D-) " + errada3_7 + "\n")
				escreva("Digite sua resposta: \n")
				escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3), Pergunta D (4):")
				leia(resposta)
	
				escolha(resposta){
	
					caso 1: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesCorretas    = questoesCorretas    + 1
					pare
					caso 2: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 3: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 4: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1	   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
	
			enquanto(sairAntes == falso){
					
					escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
					leia(desejaFinalizarQuiz)
	
					escolha(desejaFinalizarQuiz){
	
					caso 1: vaiParaProximo = falso
					        sairAntes      = verdadeiro
					        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
					pare
					caso 2: vaiParaProximo = verdadeiro
					        sairAntes      = verdadeiro   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
		}
		//Final Pergunta 7

		//Inicio Pergunta 8
		se(vaiParaProximo == verdadeiro){
		
			aguardandoResposta  = falso
			vaiParaProximo      = verdadeiro
			sairAntes           = falso
			resposta            = 0
			desejaFinalizarQuiz = 0
			enquanto(aguardandoResposta == falso){
	
				escreva("Pergunta 8: " + oitava_pergunta + "\n")
				escreva("A-) " + correta_8 + "\n")
				escreva("B-) " + errada1_8 + "\n")
				escreva("C-) " + errada2_8 + "\n")
				escreva("D-) " + errada3_8 + "\n")
				escreva("Digite sua resposta: \n")
				escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3), Pergunta D (4):")
				leia(resposta)
	
				escolha(resposta){
	
					caso 1: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesCorretas    = questoesCorretas    + 1
					pare
					caso 2: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 3: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 4: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1	   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
	
			enquanto(sairAntes == falso){
					
					escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
					leia(desejaFinalizarQuiz)
	
					escolha(desejaFinalizarQuiz){
	
					caso 1: vaiParaProximo = falso
					        sairAntes      = verdadeiro
					        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
					pare
					caso 2: vaiParaProximo = verdadeiro
					        sairAntes      = verdadeiro   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
		}
		//Final Pergunta 8

		//Inicio Pergunta 9
		se(vaiParaProximo == verdadeiro){
		
			aguardandoResposta  = falso
			vaiParaProximo      = verdadeiro
			sairAntes           = falso
			resposta            = 0
			desejaFinalizarQuiz = 0
			enquanto(aguardandoResposta == falso){
	
				escreva("Pergunta 9: " + nona_pergunta + "\n")
				escreva("A-) " + correta_9 + "\n")
				escreva("B-) " + errada1_9 + "\n")
				escreva("C-) " + errada2_9 + "\n")
				escreva("Digite sua resposta: \n")
				escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3):")
				leia(resposta)
	
				escolha(resposta){
	
					caso 1: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesCorretas    = questoesCorretas    + 1
					pare
					caso 2: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 3: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
	
			enquanto(sairAntes == falso){
					
					escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
					leia(desejaFinalizarQuiz)
	
					escolha(desejaFinalizarQuiz){
	
					caso 1: vaiParaProximo = falso
					        sairAntes      = verdadeiro
					        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
					pare
					caso 2: vaiParaProximo = verdadeiro
					        sairAntes      = verdadeiro   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
		}
		//Final Pergunta 9

		//Inicio Pergunta 10
		se(vaiParaProximo == verdadeiro){
		
			aguardandoResposta  = falso
			vaiParaProximo      = verdadeiro
			sairAntes           = falso
			resposta            = 0
			desejaFinalizarQuiz = 0
			enquanto(aguardandoResposta == falso){
	
				escreva("Pergunta 10: " + decima_pergunta + "\n")
				escreva("A-) " + correta_10 + "\n")
				escreva("B-) " + errada1_10 + "\n")
				escreva("C-) " + errada2_10 + "\n")
				escreva("D-) " + errada3_10 + "\n")
				escreva("Digite sua resposta: \n")
				escreva("Pergunta A (1), Pergunta B(2), Pergunta C (3), Pergunta D (4):")
				leia(resposta)
	
				escolha(resposta){
	
					caso 1: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesCorretas    = questoesCorretas    + 1
					pare
					caso 2: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 3: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1
					pare
					caso 4: aguardandoResposta  = verdadeiro
						   questoesRespondidas = questoesRespondidas + 1
						   questoesErradas     = questoesErradas + 1	   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
	
			enquanto(sairAntes == falso){
					
					escreva("Deseja Finalizar o Programa (1) Sim ou (2) Não: ")
					leia(desejaFinalizarQuiz)
	
					escolha(desejaFinalizarQuiz){
	
					caso 1: vaiParaProximo = falso
					        sairAntes      = verdadeiro
					        escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas)					        						
					pare
					caso 2: vaiParaProximo = verdadeiro
					        sairAntes      = verdadeiro   
					pare
					caso contrario: escreva("A tecla digita não é válida, favor verificar \n")
					pare
				}
			}
		}
		//Final Pergunta 10
	}

	funcao resultadoquiz() {

		escreva("Você completou o Quiz \n")	
		escreva("Você acertou " + questoesCorretas + " e errou " + questoesErradas + "\n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 22357; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {desejaFinalizarQuiz, 50, 11, 19}-{questoesCorretas, 51, 9, 16}-{questoesErradas, 53, 9, 15}-{resposta, 54, 9, 8}-{vaiParaProximo, 58, 9, 14};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */