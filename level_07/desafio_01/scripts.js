
let dataAtual = new Date()
let dia       = dataAtual.getDate()
let mes       = dataAtual.getMonth()
let dAno      = dataAtual.getFullYear()
let hora      = dataAtual.getHours()
let min       = dataAtual.getMinutes()
let seg       = dataAtual.getSeconds()
let data      = ''
let horas     = ''

data  = dia + '/' + (mes+1) + '/' + dAno;
horas = hora + ':' + min + ':' + seg;

document.getElementById("horacerta").innerHTML += data + ' às ' + horas