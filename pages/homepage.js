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

    const upcomingTab = document.createElement("button");
    upcomingTab.className = "tabs";
    upcomingTab.textContent = "Upcoming";
    leftTab.append(upcomingTab);

    const completedTab = document.createElement("button");
    completedTab.className = "tabs";
    completedTab.textContent = "Completed";
    leftTab.append(completedTab);

    const projectTab = document.createElement("button");
    projectTab.className = "tabs";
    projectTab.textContent = "Projects";
    leftTab.append(projectTab);


    //right main area of the page
    const taskArea = document.createElement("div");
    taskArea.className = "taskArea";
    taskArea.textContent = "task area";
    body.append(taskArea);

    const footer = document.createElement("div");
    footer.className = "footer";
    footer.textContent = "Pauleena Phan";
    page.append(footer);
}