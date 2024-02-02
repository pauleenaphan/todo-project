import { loadEditArea } from "./form";

//creates the ToDos
export function createTodo(title, description, duedate, priority){
    //allows multiple values for the value parameter
    var toDo = {
        title: title,
        description: description,
        duedate: duedate,
        priority: priority
    }

    //adds the book to the storage
    localStorage.setItem(title, JSON.stringify(toDo));
    return(localStorage.getItem(title));
}

//Loads the todo when a new one is created
export function loadTodoColumn(){
    //need to empty list so when it loads again it does not load the one we removed
    document.getElementById("toDoList").innerHTML = " ";
    for(const key of Object.keys(localStorage)){
        const toDo = document.createElement("button");
        toDo.setAttribute("id", key);
        toDo.textContent = (key);
        toDo.classList.add("toDoTask");
        toDo.addEventListener("click", loadToDoTask);
        document.getElementById("toDoList").append(toDo);
    }
}

//loads the todo information when its tab is clicked
export function loadToDoTask(e){
    console.log("testing loadtodotask")
    const inputTitle = (e.target).innerHTML
    console.log(inputTitle);

    for(const key of Object.keys(localStorage)){
        var storedToDo = localStorage.getItem(key);
        var aboutToDo = JSON.parse(storedToDo);
        if(key == inputTitle){

            //empty the div before displaying the new element
            document.getElementById("currentToDo").innerHTML = "";

            //gets rid of the new task form when you click on a task if the form is open
            document.getElementById("form").style.display = "none";
            
            //displays the new todo information
            const toDoTitle = document.createElement("id");
            toDoTitle.setAttribute("id", "toDoTitle");
            toDoTitle.textContent = (aboutToDo.title);
            document.getElementById("currentToDo").append(toDoTitle);

            const toDoDesc = document.createElement("id");
            toDoDesc.setAttribute("id", "toDodescription");
            toDoDesc.textContent = (aboutToDo.description);
            document.getElementById("currentToDo").append(toDoDesc);

            const toDoDate = document.createElement("id");
            toDoDate.setAttribute("id", "toDodueDate");
            toDoDate.textContent = (aboutToDo.duedate);
            document.getElementById("currentToDo").append(toDoDate)
            
            const toDoPrio = document.createElement("id");
            toDoPrio.setAttribute("id", "toDopriority");
            toDoPrio.textContent = (aboutToDo.priority);
            document.getElementById("currentToDo").append(toDoPrio);

            const xbtn = document.createElement("button");
            xbtn.setAttribute("id", "xbtn");
            xbtn.textContent = ("Remove Task");
            xbtn.addEventListener('click', removeTodo);
            document.getElementById("currentToDo").append(xbtn);

            const editbtn = document.createElement("button");
            editbtn.textContent = "Edit Task"
            editbtn.setAttribute("id", "editTodo");
            editbtn.addEventListener('click', loadEditArea);
            document.getElementById("currentToDo").append(editbtn);
            
        }
    }
}   

//deletes todo 
function removeTodo(){
    console.log("testing remove");
    var removeTitle = document.getElementById("toDoTitle").innerHTML
    console.log(removeTitle)
    localStorage.removeItem(removeTitle)

    //load the column list again so that it shows the element is removed
    loadTodoColumn()
    document.getElementById("currentToDo").innerHTML = " "
}


export function replaceTodo(){
    console.log(document.getElementById("editDesc").value);
    /*Rather than updating we need to remove the current todo because if we change the title but not 
    anything else it creates a new todo. THis is another way to edit the todo because we cannot have two 
    todos with the same title since we use the title as the key*/
    removeTodo();

    //creates new todo since we delete the old one 
    createTodo(document.getElementById("editTitle").value, document.getElementById("editDesc").value, document.getElementById("editDueDate").value, document.getElementById("editPriority").value, document.getElementById("editsubmit").value);

}


