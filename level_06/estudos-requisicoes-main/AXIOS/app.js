axios.get('https://api.github.com/users/ffavareto/repos').then(function(resposta) {
    resposta.data.forEach(function(repo) {
        console.log(repo)
    });
});