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
}

//Loads the todo when a new one is created
export function loadTodoColumn(){
    const highPrio = document.getElementById("highPrio");
    const medPrio = document.getElementById("medPrio");
    const lowPrio = document.getElementById("lowPrio");

    //emptys the list so when it loads againt it won't load the removed todos
    highPrio.innerHTML = "";
    medPrio.innerHTML = "";
    lowPrio.innerHTML = "";

    //loops through all the keys 
    for(const key of Object.keys(localStorage)){
        const toDo = document.createElement("button");
        toDo.setAttribute("id", key);
        toDo.textContent = (key);
        toDo.classList.add("toDoTask");
        toDo.addEventListener("click", loadToDoTask);

        //check the priors and put then in the right section
        let priority = JSON.parse(localStorage.getItem(key)).priority;
        if(priority == "High Priority"){
            highPrio.append(toDo);
        }else if(priority == "Medium Priority"){
            medPrio.append(toDo);
        }else if(priority == "Low Priority"){
            lowPrio.append(toDo);
        }
    }
}

//loads the todo information when its tab is clicked
export function loadToDoTask(titleOrEvent){

    let inputTitle;
    if(titleOrEvent instanceof Event){
        inputTitle = titleOrEvent.target.innerHTML;
    }else{
        inputTitle = titleOrEvent;
    }
    
    console.log("testing loadtodotask")
    // const inputTitle = (e.target).innerHTML
    console.log(inputTitle);

    for(const key of Object.keys(localStorage)){
        var storedToDo = localStorage.getItem(key);
        var aboutToDo = JSON.parse(storedToDo);
        if(key == inputTitle){
            const lcontainer = document.createElement("div");
            lcontainer.setAttribute("id", "lcontainer");
            const rcontainer = document.createElement("div");
            rcontainer.setAttribute("id", "rcontainer")
            const lrcontainer = document.createElement("div");
            lrcontainer.setAttribute("id", "lrcontainer");
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
            lcontainer.append(toDoDate);
            // document.getElementById("currentToDo").append(toDoDate);
            
            const toDoPrio = document.createElement("id");
            toDoPrio.setAttribute("id", "toDopriority");
            toDoPrio.textContent = (aboutToDo.priority);
            lcontainer.append(toDoPrio);
            lrcontainer.append(lcontainer);
            document.getElementById("currentToDo").append(lrcontainer);

            const xbtn = document.createElement("img");
            xbtn.src = "../img/trash-can.png";
            xbtn.setAttribute("id", "xbtn");
            xbtn.textContent = ("Remove Task");
            xbtn.addEventListener('click', removeTodo);
            rcontainer.append(xbtn);
            // document.getElementById("currentToDo").append(xbtn);

            const editbtn = document.createElement("img");
            editbtn.src = "../img/draw.png";
            editbtn.textContent = "Edit Task"
            editbtn.setAttribute("id", "editTodo");
            editbtn.addEventListener('click', loadEditArea);
            rcontainer.append(editbtn);
            lrcontainer.append(rcontainer);
            document.getElementById("currentToDo").append(lrcontainer);
            // document.getElementById("currentToDo").append(editbtn);
        }
    }
}   

//deletes todo 
function removeTodo(){
    console.log("testing remove");
    var removeTitle = document.getElementById("toDoTitle").innerHTML;
    console.log(removeTitle);
    localStorage.removeItem(removeTitle);

    //load the column list again so that it shows the element is removed
    loadTodoColumn();
    document.getElementById("currentToDo").innerHTML = " ";
}


export function replaceTodo(){
    console.log(document.getElementById("editDesc").value);
    /*Rather than updating we need to remove the current todo because if we change the title but not 
    anything else it creates a new todo. This is another way to edit the todo because we cannot have two 
    todos with the same title since we use the title as the key*/
    removeTodo();

    //creates new todo since we delete the old one 
    createTodo(
        document.getElementById("editTitle").value, 
        document.getElementById("editDesc").value, 
        document.getElementById("editDueDate").value, 
        document.getElementById("editPriority").value, 
        document.getElementById("editsubmit").value
    );
}


