let img = document.querySelector('img')
let classe = img.getAttribute('class')

img.addEventListener('click',function(){

    if (classe === 'apagada') {

        img.src = 'imagens/luz_acessa.jpg'
        classe  = 'acessa'
        img.setAttribute('class','acessa')

    } else{

        img.src = 'imagens/luz_apagada.jpg'
        classe  = 'apagada'
        img.setAttribute('class','apagada')

    }
})