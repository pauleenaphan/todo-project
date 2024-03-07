import {createTodo, replaceTodo} from "../pages/todoFunctions.js";

const subbtn = document.getElementById("submit");
const editsubbtn = document.getElementById("editsubmit");

//allows users to input their todo information
export function inputTodo(){
    createTodo(document.getElementById("title").value, document.getElementById("desc").value, document.getElementById("dueDate").value, document.getElementById("priority").value);
}

//when you click new task a form for a new todo will popup
export function showForm(){
    document.getElementById("form").style.display = "block";

    //When we click new form we get rid of the current todo tab if the user is on one
    document.getElementById("currentToDo").innerHTML = " ";
}

//after pressing submit for the new task form it inputs the form and creates the todo
subbtn.addEventListener('click', inputTodo);



export function loadEditArea(){
    document.getElementById("editTodoPopup").style.display = "block";
    //first sets the textarea box to the current title
    document.getElementById("editTitle").innerHTML = document.getElementById("toDoTitle").textContent;
    //then sets the current title to the new inputted title in the box
    document.getElementById("toDoTitle").textContent = document.getElementById("editTitle").innerHTML;

    //description
    document.getElementById("editDesc").innerHTML = document.getElementById("toDodescription").textContent;
    document.getElementById("toDodescription").textContent = document.getElementById("editDesc").innerHTML;

    //due date
    document.getElementById("editDueDate").innerHTML = document.getElementById("toDodueDate").textContent;
    document.getElementById("toDodueDate").textContent = document.getElementById("editDueDate").innerHTML;

    //priority
    document.getElementById("editPriority").innerHTML = document.getElementById("toDopriority").textContent;
    document.getElementById("toDopriority").textContent = document.getElementById("editPriority").innerHTML;
}

//after pressing the submit edit btn, replace the old todo with a new one
editsubbtn.addEventListener('click', replaceTodo);