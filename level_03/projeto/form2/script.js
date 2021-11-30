const form            = document.forms.dados;
const {raiohtml}      = form;
const {cubohtml}      = form;
const {basemenorhtml} = form;
const {basemaiorhtml} = form;
const {alturahtml}    = form;
const {logaritmohtml} = form;
let raio              = 0
let circunferencia    = 0
let area              = 0
let areaCubo          = 0
let a                 = 0
let VolumedoCubo      = 0
let areaTotal         = 0
let areaLateral       = 0
let areaTrapezio      = 0
let B                 = 0
let b                 = 0
let h                 = 0
let logaritmo         = 0 
let n1                = 0

document.forms.dados.addEventListener("submit", function(evento){
    
    evento.preventDefault()
    console.log('raiohtml: '      + raiohtml.value)
    console.log('cubohtml: '      + cubohtml.value)
    console.log('basemenorhtml: ' + basemenorhtml.value)
    console.log('basemaiorhtml: ' + basemaiorhtml.value)
    console.log('alturahtml: '    + alturahtml.value)
    console.log('logaritmohtml: ' + logaritmohtml.value)
    
    // *** INICIO PRIMEIRO CALCULO
    raio           = Number(raiohtml.value)
    circunferencia = 2 * Math.PI * raio
    area           = Math.PI * raio
    // *** FINAL PRIMEIRO CALCULO

    // *** INICIO SEGUNDO CALCULO
    a            = Number(cubohtml.value)
    areaCubo     = Math.pow(a, 2)
    VolumedoCubo = Math.pow(a, 3)
    VolumedoCubo = Math.pow(a, 3)
    areaTotal    = areaCubo * 6
    areaLateral  = 4 * Math.pow(a, 2)
    // *** FINAL SEGUNDO CALCULO

    // *** INICIO TERCEIRO CALCULO
    B            = Number(basemenorhtml.value)
    b            = Number(basemaiorhtml.value)
    h            = Number(alturahtml.value)
    areaTrapezio = (((B + b) * h) / 2)
    // *** FINAL TERCEIRO CALCULO

    // *** INICIO QUARTO CALCULO
    logaritmo = Math.log(Number(logaritmohtml.value))
    // *** FINAL QUARTO CALCULO
    
    url   = "https://www.youtube.com/embed/p31pOSBONyI"

    document.getElementById("preview").src= url;

    alert(`Circunferência:       ${circunferencia}   
           Área:                 ${area}
           Área do Cubo:         ${areaCubo}
           Volume do Cubo:       ${VolumedoCubo}
           Area Total do Cubo:   ${areaTotal}
           Area Lateral do Cubo: ${areaLateral}
           Area Trapézio:        ${areaTrapezio}
           Area Trapézio:        ${areaTrapezio}
           Logaritmo:            ${logaritmo}`)
  
 });

 document.forms.dados.botaocalcular.addEventListener("click", function() {

    n1 = Math.random() * 10
    n1 = Math.floor(n1)
    alert("Número Aleatório: " + n1)

});
 