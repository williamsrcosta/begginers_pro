let img             = document.querySelector('img')
let id              = img.getAttribute('id')
const form          = document.forms.dados;
const {inputimagem} = form;

console.log(img)
console.log(id)

document.forms.dados.addEventListener("submit", function(evento){

    evento.preventDefault()

    readImage();
})

function readImage() {

    console.log(inputimagem.value);  

    if (inputimagem.files && inputimagem.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };    
        file.readAsDataURL(inputimagem.files[0]);
    }
}