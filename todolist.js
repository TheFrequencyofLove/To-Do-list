let toDoList = []
function addToList(){
    const listInputElem = document.querySelector('.js-list-input');
    const dateInputElem = document.querySelector('.js-date-input');
    const dateInput = dateInputElem.value;
    const listInput = listInputElem.value;
    toDoList.push({listInput,dateInput});
    console.log(toDoList);
    listInputElem.value = '';
    dateInputElem.value = '';
    listCreator()
}

function listCreator(){
    let todolistHTML = ``
    for(i = 0; i < toDoList.length; i++){
        const toDoListObj = toDoList[i];
        const {listInput, dateInput} = toDoListObj;
        let html = `
                <div class= "todo-entry">${listInput}</div>
                <div class= "todo-date">${dateInput}</div>
                <button
                    class="delete-btn" 
                    onclick = "deleteBtn(${i});"
                >
                    Delete
                </button>
        
        `;
        todolistHTML += html;
    }
    document.querySelector('.js-list').innerHTML = todolistHTML;
}

function deleteBtn(i){
    toDoList.splice(i, 1);
    listCreator();
}