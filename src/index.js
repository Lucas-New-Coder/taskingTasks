
import {
    createProject,
    createTask,
    addTaskToProject,
    projectManager,
    deleteTask
} from "./createProject"

import { renderProject } from "./renderProjects.js"
import { renderTasks } from "./renderTasks.js"



const myProjects = projectManager()

const addProjectBtn = document.querySelector(".addProject")

const a = createProject("a")
myProjects.addProject(a)
addProjectBtn.addEventListener("click", () => {
    const newProject = createProject(prompt())
    myProjects.addProject(newProject)

    myProjects.getDataBase().forEach((project) => {
        renderProject(project)

    })

})
