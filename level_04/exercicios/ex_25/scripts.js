let textoString = 'abcdefghijklmnopqrstuvwxyz'
let resto       = 0

console.log('textoString: ' + textoString)

for (let index = 0; index <= 999; index++) {

    if(index <= 25) {

        console.log('dentro do for: ' + Number(index + 1) + ' - ' + textoString.charAt(index))

    }else{

        resto = (Number(index + 1) % 26) - 1

        if (resto === -1){
            resto = 25
        }
        
        //console.log('resto: ' + Number(index + 1) + ' - ' + resto)
        console.log('dentro do for: ' + Number(index + 1) + ' - ' + textoString.charAt(resto))
    }
}