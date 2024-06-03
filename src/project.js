export class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.tasklists = [];
    }

    addTaskList(taskList) {
        this.tasklists.push(taskList);
    }

    removeTaskList(taskListTitle) {
        this.tasklists = this.tasklists.filter(taskList => taskList.taskListTitle !== taskListTitle);
    }
}