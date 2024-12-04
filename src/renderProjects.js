export const renderProject = (object,project) => {
    const projectContainer = document.createElement("div");

    // Remove every white space
    const setId = object.projectName.replace(/\s+/g, "");
    //set the id 
    projectContainer.setAttribute("id", setId);


    
   
    const testeTitle = document.createElement("h1");
    projectContainer.appendChild(testeTitle);
    testeTitle.innerText = object.projectName;

    projects.appendChild(projectContainer);
};


/* teste.forEach((object) => {
    const testeTitle = document.createElement("h1")
    testeTitle.innerText = object.projectName
    container.appendChild(testeTitle)
}) */


