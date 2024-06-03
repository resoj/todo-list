export class Project {
    constructor(title) {
        this.title = title;
        this.tasklists = [];
    }

    addTaskList(taskList) {
        this.tasklists.push(taskList);
    }

    removeTaskList(taskListTitle) {
        this.tasklists = this.tasklists.filter(taskList => taskList.taskListTitle !== taskListTitle);
    }
}