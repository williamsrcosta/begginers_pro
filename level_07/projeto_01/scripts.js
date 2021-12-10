const form          = document.forms.dados;
const { nome }      = form;
const { monstros }  = form;
const { especie }   = form;
const { armamento } = form;
const { local }     = form;
const { acidente }  = form;
let lRet            = true
let cHistoria       = ''
let cFim            = ''
let dataHoje        = ''
let dAno            = ''
let vetorImagens    = []
let i               = 0
let tempoTime       = 50

document.forms.dados.btnhistoria.addEventListener("click", function (evento) {

    //form.style.display = 'block'

    lRet = true

    if (nome.value.trim() === '') {

        lRet = false
        alert('Nome não pode ser branco, favor verificar')

    }

    console.log('nome:' + nome.value)
    console.log('monstros:' + monstros.value)
    console.log('especie:' + especie.value)
    console.log('armamento:' + armamento.value)
    console.log('local:' + local.value)
    console.log('acidente:' + acidente.value)

    if (lRet === true) {

        form.style.display                                    = 'none'
        document.getElementById("sechistoria").style.display  = 'flex'
        document.getElementById("criaHistoria").style.display = 'flex'
        
        criaHistoria()
        criarImagens()
        TrocarImagens()
        setInterval(() => {

            TrocarImagens()
        
        }, 5000);

        GerarHistoria()
    }
})

function criaHistoria() {

    dataHoje  = new Date()
    dAno      = dataHoje.getFullYear()
    cHistoria = `Era uma vez em lugar chamado ${local.value} havia lá um habitante que se 
                    chamava ${nome.value}, ele era um ${especie.value} muito alegre, 
                    até que foi chegada a era dos ${monstros.value}s, que foi causada 
                    em ${dAno} por uma  ${acidente.value} que fazia com que os 
                    humanos pertos se tornassem ${monstros.value}s, criaturas 
                    sem qualquer tipo de consciência, suas únicas motivações eram 
                    comer ${especie.value}s e dançar break. O ${especie.value} se viu obrigado 
                    a aprender técnicas de combate aprimoradas, até que encontrou no 
                    Submundo de ${local.value} uma ${armamento.value}, ferramenta que ele 
                    utilizou por décadas no combate destes ${monstros.value}s, até que um dia 
                    aprendeu uma magia capaz de trazer os ${monstros.value}s de volta a sanidade 
                    mental, esses por sua vez não esqueceram como dançar break...Fim`
    
    console.log('cHistoria: ' + cHistoria)
    console.log('cFim: ' + cFim)
}

function criarImagens() {

    console.log('Inicio funcão criarImagens')

    switch (monstros.value) {

        case 'Zumbi':
            vetorImagens.push('https://i.pinimg.com/originals/66/b7/b5/66b7b54bc106aa6f64a436b99121a877.jpg')
            vetorImagens.push('https://s1.1zoom.me/b5050/117/342078-blackangel_1920x1080.jpg');
            vetorImagens.push('https://i.pinimg.com/originals/eb/21/37/eb213700250bfa06ffecc1adc782ae50.jpg');
            vetorImagens.push('https://acrediteounao.com/wp-content/uploads/2017/01/resident-evil-wallpaper-zombie-images-1920x1080.jpg');
            break;
        case 'Dragão':
            vetorImagens.push('https://miro.medium.com/max/1024/1*GTvguMNvfxKXv8YADga6jg.jpeg')
            vetorImagens.push('https://img.elo7.com.br/product/zoom/26B13A2/painel-de-festa-dragao-como-treinar-seu-dragao.jpg');
            vetorImagens.push('https://woomagazine.com.br/wp-content/uploads/2020/10/Coracao-de-Dragao-A-Vinganca.jpg');
            vetorImagens.push('https://exame.com/wp-content/uploads/2019/10/dragoes.gif');
            break;    
    }

    console.log('vetorImagens')
    console.log(vetorImagens)
    console.log('Final funcão criarImagens')
}

function TrocarImagens() {

    let trocaImagensAtras = Math.floor(Math.random() * vetorImagens.length);
    /*
    if (trocaImagensAtras == 0) {

        trocaImagensAtras = 1;

    }
    */
    document.body.style.backgroundImage = `url('${vetorImagens[trocaImagensAtras]}')`;

    

}

function GerarHistoria() {

    console.log('Inicio funcão criarImagens')

    if (i < cHistoria.length) {

        document.getElementById("geraHistoria").innerHTML += cHistoria.charAt(i);
        i++;
        setTimeout(GerarHistoria, tempoTime);
      }

    console.log('Final funcão criarImagens')
}