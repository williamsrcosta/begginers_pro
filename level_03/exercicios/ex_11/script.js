const form         = document.forms.dados;
const {valormoeda} = form;
const {taxa}       = form;
const {moedas}     = form;
let vlMoeda        = 0
let vlTaxa         = 0
let resultado      = 0

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()
    
    vlMoeda   = Number(valormoeda.value.replace(',', '.'))
    vlTaxa    = Number(taxa.value.replace(',', '.'))
    resultado = vlMoeda * vlTaxa

    console.log(valormoeda.value)
    console.log(taxa.value)
    console.log(moedas.value)
    console.log(vlMoeda)
    console.log(vlTaxa)
    console.log(resultado)
    
    if(moedas.value === 'euro'){

        document.getElementById("resultadop").textContent = resultado.toFixed(3) + ' em ' + moedas.value

    }else{

        document.getElementById("resultadop").textContent = resultado.toFixed(3) + ' em ' + moedas.value
    }
 });