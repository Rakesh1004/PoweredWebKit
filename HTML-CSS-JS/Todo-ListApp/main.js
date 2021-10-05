//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//EventListeners
todoButton.addEventListener("click",addtodo);
todoList.addEventListener("click",deleteitem);
//Functions
function addtodo(event){
    event.preventDefault();
    //Addind a container div
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    //Creating a list element
    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    //gives it a class
    newtodo.classList.add('todo-item');
    //append it to the container
    tododiv.appendChild(newtodo);
    const check = document.createElement('button');
    check.innerHTML = '<i class="fas fa-check"></i>';
    check.classList.add('check-button');
    tododiv.appendChild(check);
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.classList.add('trash-button');
    tododiv.appendChild(trash);
    //connects the whole div to the todoList function
    todoList.appendChild(tododiv);
    todoInput.value = "";
}
function deleteitem(e){
    const item = e.target;
    if(item.classList[0]==='trash-button'){
        const todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0]==='check-button'){
        const todo = item.parentElement;
        todo.classList.toggle("Completed");
    }
}