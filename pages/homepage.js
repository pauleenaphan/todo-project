export function loadhome(){
    const page = document.getElementById("page");

    const header = document.createElement("div");
    header.textContent = "TODO";
    header.className = "header";
    page.appendChild(header);

    const body = document.createElement("div");
    body.className = "body";
    page.appendChild(body);

    //left tab of the page
    const leftTab = document.createElement("div");
    leftTab.className = "leftTab";
    body.append(leftTab);

    const homeTab = document.createElement("button");
    homeTab.classname = "tabs";
    homeTab.textContent = "Home";
    leftTab.append(homeTab);

    const toDoList = document.createElement("div");
    toDoList.setAttribute("id", "toDoList");
    leftTab.append(toDoList);

    //right main area of the page
    const taskArea = document.createElement("div");
    taskArea.setAttribute("id", "taskArea");
    // taskArea.textContent = "task area";
    body.append(taskArea);

    const footer = document.createElement("div");
    footer.className = "footer";
    footer.textContent = "Pauleena Phan";
    page.append(footer);
}