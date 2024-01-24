import {createTodo, removeTodo} from "../pages/todoFunctions.js";

const subbtn = document.getElementById("submit");

//allows users to input their todo information
export function inputTodo(){
    console.log("pressing submit");
    createTodo(document.getElementById("title").value, document.getElementById("desc").value, document.getElementById("dueDate").value, document.getElementById("priority").value);
}

//when you click new task a form will popup
export function showForm(){
   document.getElementById("form").style.visibility = 'visible';
   
}

//after pressing submit it inputs the form and creates the todo
subbtn.addEventListener('click', inputTodo);


