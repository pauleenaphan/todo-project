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

        //create todo title then add other elements inside
        const toDo = document.createElement("id");
        toDo.setAttribute("id", key);
        toDo.textContent = (aboutToDo.title);
        document.getElementById("toDoList").append(toDo);

        // const toDoDesc = document.createElement("div");
        // toDoDesc.setAttribute("id", "description");
        // toDoDesc.textContent = (aboutToDo.description);
        // document.getElementById("title").append(toDoDesc);
       
    }
}