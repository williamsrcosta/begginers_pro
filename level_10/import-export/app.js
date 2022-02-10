import { buscaEndereco } from './pasta/outro_arquivo.js';

const inputCEP = document.getElementById('cep');
const resultadoTela = document.getElementById('resultado');

inputCEP.addEventListener('blur', (e) => {
    const url = `https://viacep.com.br/ws/${e.target.value}/json/`;
    buscaEndereco(url, mostraEndereco);
});

function mostraEndereco(objEndereco) {
    resultadoTela.innerHTML =  `
        <p>${objEndereco.logradouro}</p>
        <p>${objEndereco.localidade}</p>
        <p>${objEndereco.bairro}</p>
    `;
}