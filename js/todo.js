const todoForm = document.querySelector('#todoform');
const toDoInput = todoForm.querySelector('input');
const todoUl = document.querySelector('#todo-list');

const ToDosKey = 'ToDos';

let toDos = [];

function saveTodo(){
    localStorage.setItem(ToDosKey,JSON.stringify(toDos));
}

function deleteToDo(evn){
    const li = evn.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    saveTodo();
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = "X"
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoUl.appendChild(li);
}

function toDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveTodo();
}

todoForm.addEventListener('submit',toDoSubmit);

const saveToDos = localStorage.getItem(ToDosKey);
if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}