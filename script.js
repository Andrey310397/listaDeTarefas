let listElement = document.querySelector('#app ul'); // O querySelector faz a relação de algum item
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = [];

function addTarefa() {
    if (inputElement.value === '') {
        alert('Digite alguma tarefa');
        return false;
    } else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);

        inputElement.value = '';
    }
}

buttonElement.onclick = addTarefa;
