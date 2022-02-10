export function buscaEndereco(url, callback) {
    fetch(url)
    .then(resultado => resultado.json()
    .then(dados => callback(dados)));
}