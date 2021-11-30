const form               = document.forms.estilo;
const {background_color} = form;
const {paddingTopBotton} = form;
let cbotaoform           = document.getElementById("botaoform");

document.forms.estilo.addEventListener("input", function(evento) {

    console.log('1 background_color: ' + background_color.value)
    console.log('2 paddingTopBotton: ' + paddingTopBotton.value)
    
    // *** INICIO CAMPO 1 background_color
    if (background_color.value != ''){

        console.log('3 entrei no if will')

        cbotaoform.style.backgroundColor = background_color.value
        
    }else{
        console.log('5 entrei no else will')
        
    }

    // *** FINAL CAMPO 1 background_color

    // *** INICIO CAMPO 2 paddingTopBotton

    if (paddingTopBotton.value != ''){

        console.log('3 entrei no if will')

        cbotaoform.style.backgroundColor = background_color.value
        
    }else{
        console.log('5 entrei no else will')
        
    }

    // *** FINAL CAMPO 2 paddingTopBotton 

    document.getElementById("myDiv").style.paddingTop = "50px";
})    