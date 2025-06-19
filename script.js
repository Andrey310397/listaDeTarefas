let listElement = document.querySelector('#app ul'); // O querySelector faz a relação de algum item
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = [];

function renderTarefas() {
    listElement.innerHTML = '';

    tarefas.map((todo) => {
        let liElement = document.createElement('li'); //Está criando um elemento de lista no caso o <li></li>
        let tarefaText = document.createTextNode(todo); //Está criando um novo texto, com a tarefa do todo

        liElement.appendChild(tarefaText); //Está adicionando no elemento o que quer ser escrito

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
