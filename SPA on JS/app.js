// Cоздаём наши элементы ( список )
function createTodoItem(title) { // В title ложим значение ввода
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    editButton.innerText = 'Изменить';
    editButton.className = 'edit';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.className = 'delete';

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    bindEvents(listItem);
    return listItem;
}
// Добавляем функционал ( меняем )
function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');
    checkbox.addEventListener('change', toggleToDoItem);
    editButton.addEventListener('click', editTodoItem);
     deleteButton.addEventListener('click', deleTodoItem); 
}

function addTodoItem(event) {
    event.preventDefault(); // для того что бы submit не перезагружал страницу
    if (addInput.value === '') {
        return console.log('Введите название задачи');
    }
    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';
}

function toggleToDoItem() { // Реаструктуризация?
    const listItem = this.parentNode;
    listItem.classList.toggle('completed');
}

function editTodoItem() {
    const listItem = this.parentNode;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('.textfield');
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.innerText = editInput.value;
        this.innerText = 'Изменить'; // this - наша кнопка изменить
    } else {
        editInput.value = title.innerText;
        this.innerText = 'Сохранить';
    }
    listItem.classList.toggle('editing');
    console.log(this); // в данном случае это кнопка
    console.log(listItem); // весь li
}

function deleTodoItem(){

  const listItem = this.parentNode;
  todoList.removeChild(listItem)
  console.log(listItem)
}


const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');
todoForm.addEventListener('submit', addTodoItem)