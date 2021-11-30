function somar() {
    let vl1 = Number(document.getElementById('valor1').value.replace(',', '.')) 
    let vl2 = Number(document.getElementById('valor2').value.replace(',', '.')) 
    let resultado = '';
    resultado = vl1 + vl2 ;
    console.log('resultado:' + resultado)
    document.getElementById("resultadop").textContent = resultado

}

function subtrair() {
   let vl1 = Number(document.getElementById('valor1').value.replace(',', '.')) 
   let vl2 = Number(document.getElementById('valor2').value.replace(',', '.')) 
   let resultado = '';
   resultado = vl1 - vl2 ;
   console.log('resultado:' + resultado)
   document.getElementById("resultadop").textContent = resultado

}  

function multiplicar() {
    let vl1 = Number(document.getElementById('valor1').value.replace(',', '.')) 
    let vl2 = Number(document.getElementById('valor2').value.replace(',', '.')) 
    let resultado = '';
    resultado = vl1 * vl2 ;
    console.log('resultado:' + resultado)
    document.getElementById("resultadop").textContent = resultado
 
}  

 function dividir() {
    let vl1 = Number(document.getElementById('valor1').value.replace(',', '.')) 
    let vl2 = Number(document.getElementById('valor2').value.replace(',', '.')) 
    let resultado = '';
    resultado = vl1 / vl2 ;
    console.log('resultado:' + resultado)
    document.getElementById("resultadop").textContent = resultado
 
}   
