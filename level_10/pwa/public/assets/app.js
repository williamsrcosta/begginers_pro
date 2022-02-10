window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("../public/service-worker.js");
    }
});

// Aqui abaixo temos o código normal da aplicação
const form = document.forms.namedItem('form');
let tarefas = [];
const listaTarefas = document.getElementById('tarefas');

form.addEventListener('submit', evento => {
    evento.preventDefault();

    const textotarefa = form.tarefa.value;

    addTarefa(textotarefa);

    limpaInput();
});

function atualizaLista() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, posicaoTarefa) => {
        listaTarefas.innerHTML += templatetarefa(tarefa, posicaoTarefa);
    });
}

function templatetarefa(tarefa, posicaoTarefa) {
    return `
        <li ondblclick="removeTarefa(${posicaoTarefa})">
            - ${tarefa}
        </li>
    `;
}

function addTarefa(tarefa) {
    tarefas.push(tarefa);
    atualizaLista();
}

function removeTarefa(posicaoTarefa) {
    tarefas.splice(posicaoTarefa, 1);
    atualizaLista();
}

function limpaInput() {
    form.reset();
}