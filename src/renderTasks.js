export const renderTasks = (task) => {

    
    const tasksUl = document.createElement("ul") 
    const taskTitleLi = document.createElement("li")
    const taskDescriptionLi = document.createElement("li")
    const taskDueDateLi = document.createElement("li")
    const taskPriorityLi = document.createElement("li")

    tasksUl.appendChild(taskTitleLi)
    tasksUl.appendChild(taskDescriptionLi)
    tasksUl.appendChild(taskDueDateLi)
    tasksUl.appendChild(taskPriorityLi)
    const projectId = prompt("Wich Project")
    const project = document.getElementById(projectId)
    project.appendChild(tasksUl)
    
    taskTitleLi.innerText = task.title
    taskDescriptionLi.innerText = task.description
    taskDueDateLi.innerText = task.dueDate
    taskPriorityLi.innerText = task.priority

}


