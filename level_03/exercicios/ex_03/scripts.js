const form        = document.forms.dados;
const {iframe}    = form;
document.forms.dados.addEventListener("submit", function(evento){

    let url   = ''
    let index = ''

    evento.preventDefault()
    console.log(iframe.value);
    url   = iframe.value
    index = url.indexOf('embed')

    if(index > 0){

        document.getElementById("preview").src= iframe.value;

    }else{

        document.getElementById("iframe").value= '';
        alert("Url, invalido.")
    }
 });