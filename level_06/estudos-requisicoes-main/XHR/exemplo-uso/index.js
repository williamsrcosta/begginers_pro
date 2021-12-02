const reposDiv = document.querySelector('.repositorios');
const modalRepositorio = document.getElementById('repositorio');
const fundoModal = document.getElementById('fundo-modal');

function requisicao(api_url, funcao) {

    const requisicao = new XMLHttpRequest();
    requisicao.open('GET', api_url);
    
    requisicao.addEventListener('readystatechange', function() {
        if (requisicao.readyState == 4 && requisicao.status == 200) {
            const respostaJSON = requisicao.responseText;
            const resposta = JSON.parse(respostaJSON);
            funcao(resposta);
        };
    });

    requisicao.send();
};

function template(repositorio) {
    return `
        <div class="repositorio">
            <p>${repositorio.full_name}</p>
            <div class="autor">
                <img src="${repositorio.owner.avatar_url}">
                <p>${repositorio.owner.login}</p>
            </div>
            <div class="acoes">
                <a href="${repositorio.html_url}" target="_blank">Acessar repositório no Github</a>
                <button onclick="verRepositorio('${repositorio.url}')">Ver detalhes</button>
            </div>
        </div>
    `;
};

function listaRepositorios(repositorios) {
    reposDiv.innerHTML = '';
    repositorios.forEach(function(repositorio) {
        reposDiv.innerHTML += template(repositorio);
    });
};

document.getElementById('usuario').addEventListener('blur', function(e) {
    const api_url = `https://api.github.com/users/${e.target.value}/repos`;
    requisicao(api_url, listaRepositorios);
});

function verRepositorio(api_url) {

    fundoModal.removeAttribute('hidden')
    modalRepositorio.removeAttribute('hidden');

    requisicao(api_url, preencheModal);
};

function preencheModal(repositorio) {
    modalRepositorio.innerHTML = `
    <span id="fechar" onclick="fechaModal()">Fechar</span>
        <h1>${repositorio.name}</h1>
        <div class="autor">
            <img src="${repositorio.owner.avatar_url}">
            <p>
                Criado por ${repositorio.owner.login} - <span>${new Date(repositorio.created_at).toLocaleDateString()}</span>
            </p>
        </div>
        <div id="copiar">
            <input disabled type="text" value="${repositorio.clone_url}">
            <button onclick="copiar(this)">Copiar</button>
        </div>
        <a href="${repositorio.html_url}" target='_blank'>Acessar repositório no Github</a>
    `;
};

function copiar(elemento) {
    navigator.clipboard.writeText(elemento.previousElementSibling.value);
};

function fechaModal() {
    document.querySelectorAll('.modal')
    .forEach(function(modal) {
        modal.setAttribute('hidden', '');
    });
};

fundoModal.addEventListener('click', fechaModal);