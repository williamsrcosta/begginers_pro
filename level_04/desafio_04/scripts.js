const form              = document.forms.dados;
const {media}           = form;
const {preco}           = form;
const {quilometros_dia} = form;
const {dias_semana}     = form;
let mediaKm             = 0
let precoKm             = 0
let kmDia               = 0
let DiaSemana           = 0 
let consumoDiario       = 0
let consumoSemanal      = 0
let consumoMensal       = 0
let consumoAnual        = 0
let objHistorico        = {}
let vetorHistoricos     = []
let elementotBodyResult = document.querySelector('#tbodyResult');


document.forms.dados.btncalcular.addEventListener("click", function(evento) {

    evento.preventDefault()
    
    console.log("media:"           + media.value)
    console.log("preco:"           + preco.value)
    console.log("quilometros_dia:" + quilometros_dia.value)
    console.log("dias_semana:"     + dias_semana.value)

    geraCalculos()
    criaTabelaResultado()
    mostraModalResultado()

})    

document.getElementById("descartar").onclick = function () { 

    document.getElementById('resultado').style.visibility = "hidden"

    console.log("media:"           + media.value)
    console.log("preco:"           + preco.value)
    console.log("quilometros_dia:" + quilometros_dia.value)
    console.log("dias_semana:"     + dias_semana.value)

    LimpaCamposForm()

}

document.getElementById("salvar").onclick = function () { 

    let dataAtual = new Date()

    dataAtual = gerarData(dataAtual)

    console.log('dataAtual: ' + dataAtual)

    objHistorico = new geraObjHistorico(dataAtual,precoKm,mediaKm,consumoDiario,consumoSemanal,consumoMensal,consumoAnual);

    console.log("objHistorico.data:"           + objHistorico.data)
    console.log("objHistorico.consumoDiario:"  + objHistorico.consumoDiario)
    console.log("objHistorico.consumoSemanal:" + objHistorico.consumoSemanal)
    console.log("objHistorico.consumoMensal:"  + objHistorico.consumoMensal)
    console.log("objHistorico.consumoAnual:"   + objHistorico.consumoAnual)

    //enviar para o vetor
    vetorHistoricos.push(objHistorico);
    console.log('vetorHistoricos: ' + vetorHistoricos);

    LimpaCamposForm()

    document.getElementById('resultado').style.visibility = "hidden"
    alert('Resultados enviado para o Histórico')

}

document.getElementById("ver-historico").onclick = function () { 

    if(vetorHistoricos.length > 0)  {

        varrerVetor()
    
        document.getElementById('fundo-modal').style.visibility = "visible" 
        document.getElementById('historico').style.visibility   = "visible" 

    }else{

        document.getElementById('fundo-modal').style.visibility    = "visible" 
        document.getElementById('zero-registros').style.visibility = "visible" 

    } 

}

document.getElementById("btn-zero-registro").onclick = function () { 

    document.getElementById('fundo-modal').style.visibility    = "hidden" 
    document.getElementById('zero-registros').style.visibility = "hidden" 

}

document.getElementById("fechar-historico").onclick = function () { 

    document.getElementById('fundo-modal').style.visibility = "hidden" 
    document.getElementById('historico').style.visibility   = "hidden"

}

document.getElementById("excluir-registros").onclick = function () { 

    vetorHistoricos                                       = []
    elementotBodyResult.innerHTML                         = ''
    document.getElementById('fundo-modal').style.visibility = "hidden" 
    document.getElementById('historico').style.visibility   = "hidden"

}

function excluiRegistro(posicaoRegistro) {

    vetorHistoricos.splice(posicaoRegistro, 1);
    varrerVetor()

}

function geraCalculos() {

    mediaKm        = Number(media.value.replace(',', '.'))
    precoKm        = Number(preco.value.replace(',', '.'))
    kmDia          = Number(quilometros_dia.value.replace(',', '.'))
    DiaSemana      = Number(dias_semana.value.replace(',', '.'))
    consumoDiario  = ((kmDia / mediaKm) * precoKm).toFixed(2)
    consumoSemanal = (consumoDiario * DiaSemana).toFixed(2)
    consumoMensal  = (consumoDiario * 30).toFixed(2)
    consumoAnual   = (consumoDiario * 365).toFixed(2)

    console.log("mediaKm:"        + mediaKm)
    console.log("precoKm:"        + precoKm)
    console.log("kmDia:"          + kmDia)
    console.log("DiaSemana:"      + DiaSemana)
    console.log("consumoDiario:"  + consumoDiario)
    console.log("consumoSemanal:" + consumoSemanal)
    console.log("consumoMensal:"  + consumoMensal)
    console.log("consumoAnual:"   + consumoAnual)

}
    
function criaTabelaResultado() {

    elementotBodyResult.innerHTML = ''
    elementotBodyResult.innerHTML += `<tr>
                                        <td>${consumoDiario}</td>
                                        <td>${consumoSemanal}</td>
                                        <td>${consumoMensal}</td>
                                        <td>${consumoAnual}</td>
                                      </tr> `
    
    console.log("fim da funcao criaTabelaResultado")                                  
    
}

function mostraModalResultado() {

    document.getElementById('resultado').style.visibility = "visible"

}

function LimpaCamposForm() {

    media.value           = ''
    preco.value           = ''
    quilometros_dia.value = ''
    dias_semana.value     = ''

}

function geraObjHistorico(data,precoKm,mediaKm,consumoDiario,consumoSemanal,consumoMensal,consumoAnual) {

    this.data           = data
    this.precoKm        = precoKm
    this.mediaKm        = mediaKm
    this.consumoDiario  = consumoDiario
    this.consumoSemanal = consumoSemanal
    this.consumoMensal  = consumoMensal
    this.consumoAnual   = consumoAnual

}

function varrerVetor(){

    let elementotResultHist = document.querySelector('#tbodyresultadohistorico');

    elementotResultHist.innerHTML = ''

    vetorHistoricos.forEach(function(vetorHistorico, indice, array) {

        console.log('indice:' + indice)
     
        elementotResultHist.innerHTML += `<tr>
                                            <td>${vetorHistorico.data}</td>
                                            <td>${vetorHistorico.precoKm}</td>
                                            <td>${vetorHistorico.mediaKm}</td>
                                            <td>${vetorHistorico.consumoDiario}</td>
                                            <td>${vetorHistorico.consumoSemanal}</td>
                                            <td>${vetorHistorico.consumoMensal}</td>
                                            <td>${vetorHistorico.consumoAnual}</td>
                                            <td class="excluir-item" onclick="excluiRegistro(${indice})">
                                                <span class="material-icons">
                                                    delete
                                                </span>
                                            </td>
                                        </tr> `
        
        console.log(`data           ${vetorHistorico.data} `);
        console.log(`precoKm        ${vetorHistorico.precoKm} `);
        console.log(`mediaKm        ${vetorHistorico.mediaKm} `);
        console.log(`consumoDiario  ${vetorHistorico.consumoDiario} `);
        console.log(`consumoSemanal ${vetorHistorico.consumoSemanal} `);
        console.log(`consumoMensal  ${vetorHistorico.consumoMensal} `);
        console.log(`consumoAnual   ${vetorHistorico.consumoAnual} `);

    })

    console.log("fim da funcao criaTabelaResultado")
}

function gerarData(data){

    let day     = data.getDate();
    let month   = data.getMonth();
    let year    = data.getFullYear();
    let hours   = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    data        = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
    console.log(data)
    return data;

}
