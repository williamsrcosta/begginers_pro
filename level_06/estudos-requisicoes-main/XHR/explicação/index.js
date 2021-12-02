const requisicao = new XMLHttpRequest();
requisicao.open('GET', 'https://api.github.com/users/ffavareto/repos');
requisicao.send();

requisicao.addEventListener('readystatechange', function() {
    if (requisicao.readyState == 4 && requisicao.status == 200) {

        const respostaJSON = requisicao.responseText;
        const respostaArray = JSON.parse(respostaJSON);
    
        respostaArray.forEach(function(repositorio) {
            console.log(repositorio);
        });
    };
});
