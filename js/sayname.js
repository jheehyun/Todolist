const nameForm = document.querySelector('#name-form');
const nameInput = nameForm.querySelector('input');
const setName = document.querySelector('#set-name');
const hidden_ClassName = 'hidden';
const username_key = 'username';

function nameFormsend(event){
    event.preventDefault();
    const username = nameInput.value;
    nameForm.classList.add(hidden_ClassName);
    localStorage.setItem(username_key,username);
    paintName(username);
}

function paintName(username){
    setName.innerText = `Hello ${username}`;
    setName.classList.remove(hidden_ClassName);
}

const saveUsername = localStorage.getItem(username_key);
if(saveUsername === null){
    nameForm.classList.remove(hidden_ClassName);
    nameForm.addEventListener('submit',nameFormsend);
}
else{
    paintName(saveUsername);
}