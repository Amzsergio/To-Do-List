let toDoItems = []

let author = document.querySelector('#author')
author.innerHTML += ' Sergio Amz'

class ToDo {
    constructor(description){
        this.description = description;
        this.complete = false;
    }

    completeToDo(){
        this.complete = !this.complete;
    }
}

function buildToDo (todo, index){
    let toDoShell = document.createElement('div')
    let toDoText = document.createElement('span')

    toDoShell.setAttribute('class', 'toDoShell')    
    toDoText.setAttribute('id', index)

    toDoText.innerHTML = todo.description

    if(todo.complete === true){
        toDoText.setAttribute('class', 'completedText')
    }

    toDoShell.appendChild(toDoText)

    toDoText.addEventListener('click', completeToDo)

    return toDoShell    
}

function buildToDos(toDos){
    return toDos.map((todo, index) => buildToDo(todo, index))
}

function displayToDos(){
    let toDoContainer = document.querySelector('#toDoContainer')

    toDoContainer.innerHTML = ""

    let newArr = buildToDos(toDoItems)

    newArr.forEach(shell => toDoContainer.appendChild(shell));
}

function addToDo(){
    let inputValue =  document.querySelector('#toDoInput')
    let newTodo = new ToDo(inputValue.value)
    toDoItems.push(newTodo)
    inputValue.value = ""
    displayToDos()
}

let add = document.querySelector("#addButton")
add.addEventListener('click', addToDo)

function completeToDo(event){
    const index =  event.target.id 

    toDoItems[index].completeToDo()
    displayToDos()
}

displayToDos()