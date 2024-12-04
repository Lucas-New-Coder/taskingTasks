import { add } from "lodash"
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
const currentProject = ""





const projectsDiv = document.querySelector(".addProject")

const handleProjectClick = () => {
    const projectName = prompt()

    const addProject = createProject(projectName)

    renderProject(myProjects,addProject)

    myProjects.addProject(addProject)
    console.log(myProjects.getDataBase())
}

projectsDiv.addEventListener("click", handleProjectClick)


const handleTasksClick = (project) => {


    const taskTitle = prompt("Task Title")
    const taskDescription = prompt("Task Description")
    const taskDueDate = prompt("Task DueDate")
    const taskPriority = prompt("Task Priority")

    const addTask = createTask(taskTitle, taskDescription, taskDueDate, taskPriority)

    renderTasks(myProjects,addTask)
}

const tasksDiv = document.querySelector(".addTask")
tasksDiv.addEventListener("click", handleTasksClick)

