const url = "https://api.github.com/users/faculdadeiv2/repos";

fetch(url).then(function(resJSON) {
    resJSON.json().then(function(repositorios) {
        repositorios.forEach(function(repositorio) {
            console.log(repositorio);
        });
    });
});