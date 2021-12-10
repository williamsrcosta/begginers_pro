let cont  = 0;
let myVar = setInterval(() => {

    cont++;
    document.querySelector('#content').textContent = cont;

}, 1000);

function stopCounter() {

    clearInterval(myVar); // Aqui estamos parando o contador, portanto, o número de segundos da página irá parar.
    // Isso é feito passando como parâmetro da função a variável a qual salvamos o setInterval()
    
}