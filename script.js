let listElement = document.querySelector('#app ul'); // O querySelector faz a relação de algum item
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = [];

function renderTarefas() {
    listElement.innerHTML = '';

    tarefas.map((todo) => {
        let liElement = document.createElement('li'); //Está criando um elemento de lista no caso o <li></li>
        let tarefaText = document.createTextNode(todo); //Está criando um novo texto, com a tarefa do todo

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`);

        liElement.appendChild(tarefaText); //Está adicionando no elemento o que quer ser escrito
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    });
}

function addTarefa() {
    if (inputElement.value === '') {
        alert('Digite alguma tarefa');
        return false;
    } else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);

        inputElement.value = '';

        renderTarefas();
    }
}

buttonElement.onclick = addTarefa;

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);

    renderTarefas();
}