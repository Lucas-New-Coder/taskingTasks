export const createProject = (projectName) => {
    return {
        projectName,
        tasks: [],
    }
}


export const createTask = (title, description, dueDate, priority) => {
    return   {
        title, description, dueDate, priority
    }
}


export const addTaskToProject = (project, task) => {
    project.tasks.push(task)
}

export const projectManager = () => {
    const projects = []

    return {
        addProject: (project) => {
            projects.push(project)
        },
        getDataBase: () => {
            return projects
        }
    }

}

export const deleteTask = (project, task) => {
    const index = project.tasks.findIndex(
        t => t.title === task.title
    )

    project.tasks.splice(index, 1)

}