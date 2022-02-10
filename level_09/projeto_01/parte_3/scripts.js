const form             = document.forms.dados;
const {nome}           = form;
let respostaJSON       = null
let nTeste             = 0
let objCartas          = null
let vetorCartas        = []
let elementoTabJogos   = ''
let res                = ''
let cost               = '' 
let playerClass        = ''
let text               = ''
let race               = ''
let mechanics          = ''
let attack             = ''
let health             = ''
let type               = ''
let flavor             = ''
let artist             = ''
let carregando         = ''

document.forms.dados.btnbuscar.addEventListener("click", function (e) {

    console.log('nome.value: '        + nome.value)
    console.log('nome.value.lenght: ' + nome.value.length)
    console.log('nome.lenght: '       + nome.length)

    respostaJSON       = null
    nTeste             = 0
    objCartas          = null
    vetorCartas        = []
    elementoTabJogos   = ''
    res                = ''
    cost               = '' 
    playerClass        = ''
    text               = ''
    race               = ''
    mechanics          = ''
    attack             = ''
    health             = ''
    type               = ''
    flavor             = ''
    artist             = ''
    carregando         = ''

    try {

        if (nome.value.length > 0) {

            carregando = ` <div class="text-center w-25 p-3 mx-auto">
                                <img src="./imagens/loading.gif" width="100" >
                            </div>`

            document.getElementById('section_cartas').innerHTML = carregando;

            requisicao(nome.value)
    
        } else {
    
            nome.value = ''
            throw new Error("Nome em Branco, favor verificar");
            
        }

    } catch (erro) {

        console.log(erro); 
        alert(erro)

    }
   
})
 
async function requisicao(nome) {

    nTeste = nTeste + 1

    console.log('entrei na function requisicao: ' + nTeste)

    let response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${nome}`, {
                               "method": "GET",
                               "headers": {"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                                           "x-rapidapi-key": "7683ac5f6bmshbb09d5a3147c219p1ee7e3jsn517d6917ef06"
                                          }
    }).then( res =>  res.json()).then(cards =>  {

        console.log('entrei no then will: ' + nTeste);
       

        for(var key in cards){

            console.log('entrei no for')

            console.log(Object.prototype.hasOwnProperty.call(cards, key))

            if(Object.prototype.hasOwnProperty.call(cards, key)){

                console.log('entrei no if')

                var card = cards[key];

                console.log('card')
                console.log(card)

                if(card.img !== null && card.img !== undefined){

                    cost        = String(card.cost        !== null && card.cost        !== undefined ? card.cost        : '')
                    playerClass = String(card.playerClass !== null && card.playerClass !== undefined ? card.playerClass : '') 
                    text        = String(card.text        !== null && card.text        !== undefined ? card.text        : '') 
                    race        = String(card.race        !== null && card.race        !== undefined ? card.race        : '') 
                    mechanics   = String(card.mechanics   !== null && card.mechanics   !== undefined ? card.mechanics   : '') 
                    attack      = String(card.attack      !== null && card.attack      !== undefined ? card.attack      : '') 
                    health      = String(card.health      !== null && card.health      !== undefined ? card.health      : '') 
                    type        = String(card.type        !== null && card.type        !== undefined ? card.type        : '') 
                    flavor      = String(card.flavor      !== null && card.flavor      !== undefined ? card.flavor      : '') 
                    artist      = String(card.artist      !== null && card.artist      !== undefined ? card.artist      : '') 

                    console.log('entrei no if')
                    objCartas = new GeraobjCartas(card.name,card.cardSet,cost,playerClass,text,race,mechanics,card.img,attack,health,type,flavor,artist)
                    vetorCartas.push(objCartas);
                    
                }
               
            }
        }               
    }).catch(function (e) {

        console.log('will entrei aqui catch: ' + e + nTeste);

    })

    varrerVetor(vetorCartas)
    console.log('tamanho do vetor')
    console.log(vetorCartas.length)
    console.log('sai na function requisicao')

    return 'ok'
}

function GeraobjCartas(name,cardSet,cost,playerClass,text,race,mechanics,img,attack,health,type,flavor,artist) {

    this.name        = name
    this.cardSet     = cardSet
    this.cost        = cost
    this.playerClass = playerClass
    this.text        = text
    this.race        = race
    this.mechanics   = mechanics
    this.img         = img
    this.attack      = attack
    this.health      = health
    this.type        = type
    this.flavor      = flavor
    this.artist      = artist

}
       
function varrerVetor(vetorCartas){

    console.log("inicio da funcao varrerVetor")
    console.log('vetorCartas')
    console.log(vetorCartas)
    
    let elementoTabJogos = document.querySelector('#section_cartas');

    console.log("1-) varrerVetor")

    elementoTabJogos.innerHTML = ''

    console.log("2-) varrerVetor")

    vetorCartas.forEach(function(vetorCarta, indice) {

        if (indice <= 100){

            console.log('vetorCartas:')
            console.log(vetorCarta)
            console.log('indice:' + indice)

            // crase = template string
            elementoTabJogos.innerHTML += ` <div id="div_container_${indice}" class="div_container w-25 p-3"> 

                                            <div>


                                                <div id="div_img_${indice}" class="bg-image" style="background-image: url('./imagens/Livro.png')">
                                                    
                                                    <img class="w-100 p-3" src=${vetorCarta.img}>

                                                </div>

                                                <div id="div_descrition_${indice}" class="div_descrition bg-danger w-100 p-3 text-center">

                                                <h5><b>${vetorCarta.name}</b></h5>
                                                <br>
                                                <h5><b>Expansão:         </b> ${vetorCarta.cardSet}     </h5>
                                                <h5><b>Custo:            </b> ${vetorCarta.cost}        </h5>
                                                <h5><b>Classe:           </b> ${vetorCarta.playerClass} </h5>
                                                <h5><b>Informativo:      </b> ${vetorCarta.text}        </h5>
                                                <h5><b>Raça:             </b> ${vetorCarta.race}        </h5>
                                                <h5><b>Mecânicas:        </b> ${vetorCarta.mechanics}   </h5>
                                                <h5><b>Ataque:           </b> ${vetorCarta.attack}      </h5>
                                                <h5><b>Atributo de vida: </b> ${vetorCarta.health}      </h5>
                                                <h5><b>Tipo:             </b> ${vetorCarta.type}        </h5>
                                                <h5><b>História:         </b> ${vetorCarta.flavor}      </h5>
                                                <h5><b>Artista:          </b> ${vetorCarta.artist}      </h5>

                                                </div>
                                            </div>
                                        </div> `
        
        }
    })

    console.log("fim da funcao varrerVetor")
}
