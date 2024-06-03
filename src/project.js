export class Project {
    constructor(projectTitle) {
        this.projectTitle = prokectTitle;
        this.tasklists = [];
    }

    addTaskList(taskList) {
        this.tasklists.push(taskList);
    }

    removeTaskList(taskListTitle) {
        this.tasklists = this.tasklists.filter(taskList => taskList.taskListTitle !== taskListTitle);
    }
}