//creates the ToDos
export function createToDo(title, description, duedate, priority){
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
    for(const key of Object.keys(localStorage)){
        // console.log(key, localStorage.getItem(key));
        
        var storedToDo = localStorage.getItem(key);
        var aboutToDo = JSON.parse(storedToDo);
        // console.log("using key", key)
        // console.log("Using todo", aboutToDo.title)

        const toDo = document.createElement("button");
        toDo.setAttribute("id", key);
        toDo.textContent = (key);
        toDo.classList.add("toDoTask");
        toDo.addEventListener("click", loadToDoTask)
        document.getElementById("toDoList").append(toDo);
    }
}

export function loadToDoTask(e){
    console.log("testing loadtodotask")
    const inputTitle = (e.target).innerHTML
    console.log(inputTitle);

    for(const key of Object.keys(localStorage)){
        var storedToDo = localStorage.getItem(key);
        var aboutToDo = JSON.parse(storedToDo);
        if(key == inputTitle){
            // console.log("key:" + key)
            // console.log("inputTitle" + inputTitle)

            //empty the div before displaying the new element
            document.getElementById("currentToDo").innerHTML = "";

            //displays the new todo information
            const toDoDesc = document.createElement("id");
            toDoDesc.setAttribute("id", "description");
            toDoDesc.textContent = (aboutToDo.description);
            document.getElementById("currentToDo").append(toDoDesc);

            const toDoDate = document.createElement("id");
            toDoDate.setAttribute("id", "dueDate");
            toDoDate.textContent = (aboutToDo.duedate);
            document.getElementById("currentToDo").append(toDoDate)
            
            const toDoPrio = document.createElement("id");
            toDoPrio.setAttribute("id", "priority");
            toDoPrio.textContent = (aboutToDo.priority);
            document.getElementById("currentToDo").append(toDoPrio);
        }
    }
}   

// //deletes todo 
// export function removeToDo(title){
//     localStorage.removeItem
// }
