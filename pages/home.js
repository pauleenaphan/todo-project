import {inputTodo, showForm} from "../pages/form.js"

export function loadhomeTab(){
    const tArea = document.getElementById("taskArea");

    //creates new task button 
    const newbtn = document.createElement("button");
    newbtn.textContent = "New Task";
    newbtn.setAttribute("id", "addTodo");
    tArea.append(newbtn);

    //When newbtn is pressed, the form will pop up
    newbtn.addEventListener('click', showForm);
    const form = document.getElementById("form");
    tArea.append(form);

    const toDoList = document.createElement("div");
    toDoList.setAttribute("id", "toDoList");
    tArea.append(toDoList);
}
