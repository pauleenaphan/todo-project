export function createToDo(title, description, duedate, priority){
    //allows multiple values for the value parameter
    var aboutBook = {
        description: description,
        duedate: duedate,
        priority: priority
    }

    //adds the book to the storage
    localStorage.setItem(title, JSON.stringify(aboutBook));
    return(localStorage.getItem(title));
}


