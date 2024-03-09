import { showForm } from "./form";

export function loadhome(){
    const page = document.getElementById("page");

    const body = document.createElement("div");
    body.className = "body";
    page.appendChild(body);

    //left tab of the page
    const leftTab = document.createElement("div");
    leftTab.className = "leftTab";
    body.append(leftTab);

    //right main area of the page
    const taskArea = document.createElement("div");
    taskArea.setAttribute("id", "taskArea");
    // taskArea.textContent = "task area";
    body.append(taskArea);

    const titleContainer = document.createElement("div");
    titleContainer.setAttribute("id", "titleContainer");
    leftTab.append(titleContainer);

    const homeTab = document.createElement("h1");
    homeTab.setAttribute("id", "todoTitle");
    homeTab.textContent = "Todos";
    titleContainer.append(homeTab);

    const newbtn = document.createElement("button");
    newbtn.textContent = "+";
    newbtn.setAttribute("id", "addTodo");
    titleContainer.append(newbtn);

    const highTitle = document.createElement("id");
    highTitle.classList.add("title");
    highTitle.textContent = "High Priority";
    leftTab.append(highTitle);

    const highPrio = document.createElement("id");
    highPrio.setAttribute("id", "highPrio")
    leftTab.append(highPrio);

    const medTitle = document.createElement("id");
    medTitle.classList.add("title");
    medTitle.textContent = "Medium Priority";
    leftTab.append(medTitle);

    const mediumPrio = document.createElement("div");
    mediumPrio.setAttribute("id", "medPrio");
    mediumPrio.textContent = "Medium Priority";
    leftTab.append(mediumPrio);

    const lowTitle = document.createElement("div");
    lowTitle.classList.add("title");
    lowTitle.textContent = "Low Priority";
    leftTab.append(lowTitle);

    const lowPrio = document.createElement("div");
    lowPrio.setAttribute("id", "lowPrio");
    lowPrio.textContent = "Low Priority";
    leftTab.append(lowPrio);

    const githubLink = document.createElement("a");
    githubLink.setAttribute("id", "githubLink");
    githubLink.href = "github.com";
    leftTab.append(githubLink);

    const githubIcon = document.createElement("img");
    githubIcon.setAttribute("id", "githubIcon");
    githubIcon.src = "../img/githubicon.png";
    githubLink.append(githubIcon);

    //When newbtn is pressed, the form will pop up
    newbtn.addEventListener('click', showForm);
    const form = document.getElementById("form");
    taskArea.append(form);

    const currentToDo = document.createElement("div");
    currentToDo.textContent = " ";
    currentToDo.setAttribute("id", "currentToDo");
    taskArea.append(currentToDo);
}