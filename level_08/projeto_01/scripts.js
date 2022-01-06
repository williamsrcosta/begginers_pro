const form             = document.forms.dados;
const { artista }      = form;
let respostaJSON       = null
let nTeste             = 0
let objDeezer          = null
let vetorMusicas       = []
let elementoTabMusicas = ''

document.forms.dados.btnbuscar.addEventListener("click", function (e) {

    console.log('artista.value: '        + artista.value)
    console.log('artista.value.lenght: ' + artista.value.length)
    console.log('artista.lenght: '       + artista.length)

    respostaJSON       = null
    nTeste             = 0
    objDeezer          = null
    vetorMusicas       = []
    elementoTabMusicas = ''

    try {

        if (artista.value.length > 0) {

            requisicao()
    
        } else {
    
            artista.value = ''
            throw new Error("Artista em Branco, favor verificar");
            
        }

    } catch (erro) {

        console.log(erro); 
        alert(erro)

    }
   
})

async function requisicao() {

    nTeste = nTeste + 1

    console.log('entrei na function requisicao: ' + nTeste)

    let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artista.value}`, {
                               "method": "GET",
                               "headers": {"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                                           "x-rapidapi-key": "7683ac5f6bmshbb09d5a3147c219p1ee7e3jsn517d6917ef06"
                                          }
    }).then( res =>  res.json()).then(cards =>  {

        console.log('entrei no then will: ' + nTeste);
        console.log(cards);
        console.log('antes da função');
        
        criaobjeto(cards)
        varrerVetor(vetorMusicas)

        console.log('depois da função');        
        
    }).catch(function (e) {

        console.log('will entrei aqui catch: ' + e + nTeste);

    })

    console.log('sai na function requisicao')

    return 'ok'
}

function GeraObjDeezer(musica,artista,duracao,ranking,album,fotoartista,fotoalbum,playmusica) {

    this.musica      = musica
    this.artista     = artista
    this.duracao     = duracao
    this.ranking     = ranking
    this.album       = album
    this.fotoartista = fotoartista
    this.fotoalbum   = fotoalbum
    this.playmusica  = playmusica

}

function criaobjeto(cards){

    console.log("inicio da funcao criaobjeto")
    //console.log('cards')
    //console.log(cards)
    //console.log('cards.data')
    //console.log(cards.data)
    console.log('antes do for each')

    Object.keys(cards.data).forEach(function(card,indice) {
   
        console.log('dentro do for each: ' + indice)
        
        //console.log('cards.data.[indice]:')
        //console.log(cards.data[indice])

        //console.log('cards.data.[indice].title_short:')
        //console.log(cards.data[indice].title_short)

        //console.log('cards.data.[indice].artist.name:')
        //console.log(cards.data[indice].artist.name)

        //console.log('cards.data.[indice].duration:')
        //console.log(cards.data[indice].duration)

        //console.log('cards.data.[indice].rank:')
        //console.log(cards.data[indice].rank)

        //console.log('cards.data.[indice].album.title:')
        //console.log(cards.data[indice].album.title)

        //console.log('cards.data.[indice].artist.picture_small:')
        //console.log(cards.data[indice].artist.picture_small)

        //console.log('cards.data.[indice].album.cover_small:')
        //console.log(cards.data[indice].album.cover_small)

        //console.log('cards.data.[indice].preview:')
        //console.log(cards.data[indice].preview)

        objDeezer = new GeraObjDeezer(cards.data[indice].title_short,cards.data[indice].artist.name,cards.data[indice].duration,cards.data[indice].rank,cards.data[indice].album.title,cards.data[indice].artist.picture_small,cards.data[indice].album.cover_small,cards.data[indice].preview)
        vetorMusicas.push(objDeezer);
        
    });
    
    console.log('objDeezer')
    console.log(objDeezer)
    console.log('vetorMusicas')
    console.log(vetorMusicas);
    console.log("fim da funcao criaobjeto")

}

function varrerVetor(vetorMusicas){

    console.log("inicio da funcao varrerVetor")
    console.log('vetorMusicas')
    console.log(vetorMusicas)
    
    let elementoTabMusicas = document.querySelector('#tbodyResult');

    console.log("1-) varrerVetor")

    elementoTabMusicas.innerHTML = ''

    console.log("2-) varrerVetor")

    vetorMusicas.forEach(function(vetorMusica, indice) {

        console.log('vetorMusicas:')
        console.log(vetorMusica)
        console.log('indice:' + indice)
        
        elementoTabMusicas.innerHTML += `<tr>
                                            <td>${vetorMusica.musica}</td>
                                            <td>${vetorMusica.artista}</td>
                                            <td>${fancyTimeFormat(vetorMusica.duracao)}</td>
                                            <td>${vetorMusica.ranking}</td>
                                            <td>${vetorMusica.album}</td>
                                            <td> <img src=${vetorMusica.fotoartista} width="100" height="100"</td>
                                            <td> <img src=${vetorMusica.fotoalbum} width="100" height="100"</td>
                                            <td> <audio src=${vetorMusica.playmusica}></audio> <i class="far fa-play-circle" onclick= "playaudio(this)"></i> </td>
                                        </tr> `
        
        
        
    })

    console.log("fim da funcao varrerVetor")
}

function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = Math.floor(duration / 3600);
    var mins = Math.floor((duration % 3600) / 60);
    var secs = Math.floor(duration % 60);

    // Output like "1:01" or "4:03:59" or "123:03:59"

    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
}

function playaudio(element) {

    stopaudio()
    element.parentElement.children[0].play()

}

function stopaudio(){

    let ListaAudio = document.querySelectorAll('audio')

    ListaAudio.forEach(function(audio) {

        audio.pause()

    })

}