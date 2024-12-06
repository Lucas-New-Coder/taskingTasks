export const renderProject = (project) => {

    
    const projects = document.querySelector("#projects")
 

    const projectTitle = document.createElement("h1")
    projectTitle.innerText = project.projectName
    projects.appendChild(projectTitle)
   


};
