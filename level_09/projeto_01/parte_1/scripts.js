const form             = document.forms.dados;
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
let carregando         = ''

carregando = ` <div class="w-24 ml-auto mr-auto">
                    <img src="./imagens/loading.gif" width="100">

                </div>`

document.getElementById('section_cartas').innerHTML = carregando;


requisicao()
 
async function requisicao() {

    nTeste = nTeste + 1

    console.log('entrei na function requisicao: ' + nTeste)

    let response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards`, {
                               "method": "GET",
                               "headers": {"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                                           "x-rapidapi-key": "7683ac5f6bmshbb09d5a3147c219p1ee7e3jsn517d6917ef06"
                                          }
    }).then( res =>  res.json()).then(cards =>  {

        console.log('entrei no then will: ' + nTeste);
       

        for(var key in cards){

            //console.log('entrei no for')

            //console.log(Object.prototype.hasOwnProperty.call(cards, key))

            if(Object.prototype.hasOwnProperty.call(cards, key)){

                //console.log('entrei no if')

                var valor = cards[key];

                //console.log('valor')
                //console.log(valor)

                valor.forEach(card => {

                    //console.log('card')
                    //console.log(card)

                    if(card.img !== null && card.img !== undefined){

                        cost        = String(card.cost        !== null && card.cost        !== undefined ? card.cost        : '')
                        playerClass = String(card.playerClass !== null && card.playerClass !== undefined ? card.playerClass : '') 
                        text        = String(card.text        !== null && card.text        !== undefined ? card.text        : '') 
                        race        = String(card.race        !== null && card.race        !== undefined ? card.race        : '') 
                        mechanics   = String(card.mechanics   !== null && card.mechanics   !== undefined ? card.mechanics   : '') 
                        attack      = String(card.attack      !== null && card.attack      !== undefined ? card.attack      : '') 
                        health      = String(card.health      !== null && card.health      !== undefined ? card.health      : '') 
                        type        = String(card.type        !== null && card.type        !== undefined ? card.type        : '') 

                        //console.log('entrei no if')
                        objCartas = new GeraobjCartas(card.name,card.cardSet,cost,playerClass,text,race,mechanics,card.img,attack,health,type)
                        vetorCartas.push(objCartas);
                        
                    }
                })
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

function GeraobjCartas(name,cardSet,cost,playerClass,text,race,mechanics,img,attack,health,type) {

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

}
       
function varrerVetor(vetorCartas){

    console.log("inicio da funcao varrerVetor")
    //console.log('vetorCartas')
    //console.log(vetorCartas)
    
    let elementoTabJogos = document.querySelector('#section_cartas');

    console.log("1-) varrerVetor")

    elementoTabJogos.innerHTML = ''

    console.log("2-) varrerVetor")

    vetorCartas.forEach(function(vetorCarta, indice) {

        if (indice <= 100){

            //console.log('vetorCartas:')
            //console.log(vetorCarta)
            console.log('indice:' + indice)
        
        // crase = template string
        elementoTabJogos.innerHTML += ` <div id="div_container_${indice}" class="div_container w-72 mx-3.5"> 

                                            <div>


                                                <div id="div_img_${indice}" class="div_img bg-[url('./imagens/Livro.png')] w-72 mx-3.5">
                                                    
                                                    <img src=${vetorCarta.img}>

                                                </div>

                                                <div id="div_descrition_${indice}" class="div_descrition bg-amber-500 w-72 mx-3.5 text-center">

                                                <h5 class="font-bold">${vetorCarta.name}</h5>
                                                <br>
                                                <h5><b>Expans??o:         </b> ${vetorCarta.cardSet}     </h5>
                                                <h5><b>Custo:            </b> ${vetorCarta.cost}        </h5>
                                                <h5><b>Classe:           </b> ${vetorCarta.playerClass} </h5>
                                                <h5><b>Informativo:      </b> ${vetorCarta.text}        </h5>
                                                <h5><b>Ra??a:             </b> ${vetorCarta.race}        </h5>
                                                <h5><b>Mec??nicas:        </b> ${vetorCarta.mechanics}   </h5>
                                                <h5><b>Ataque:           </b> ${vetorCarta.attack}      </h5>
                                                <h5><b>Atributo de vida: </b> ${vetorCarta.health}      </h5>
                                                <h5><b>Tipo:             </b> ${vetorCarta.type}        </h5>

                                                </div>
                                            </div>
                                        </div> `
        
        }
    })

    console.log("fim da funcao varrerVetor")
}
