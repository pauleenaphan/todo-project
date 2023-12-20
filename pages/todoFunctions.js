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


export function loadTodo(){
    for(const key of Object.keys(localStorage)){
        console.log(key, localStorage.getItem(key));
        
        var storedToDo = localStorage.getItem(key);
        var aboutToDo = JSON.parse(storedToDo);
        // console.log("using key", key)
        // console.log("Using todo", aboutToDo.title)

        const toDo = document.createElement("div");
        toDo.setAttribute("id", key);
        toDo.textContent = (key);
        document.getElementById("toDoList").append(toDo);

        const toDoDesc = document.createElement("id");
        toDoDesc.setAttribute("id", "description");
        toDoDesc.textContent = (aboutToDo.description);
        document.getElementById(key).append(toDoDesc);

        const toDoDate = document.createElement("id");
        toDoDate.setAttribute("id", "dueDate");
        toDoDate.textContent = (aboutToDo.duedate);
        document.getElementById(key).append(toDoDate)
       
        const toDoPrio = document.createElement("id");
        toDoPrio.setAttribute("id", "priority");
        toDoPrio.textContent = (aboutToDo.priority);
        document.getElementById(key).append(toDoPrio);
    }
}