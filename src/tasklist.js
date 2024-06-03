export class TaskList {
    constructor(taskListTitle) {
        this.taskListTitle = taskListTitle;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskTitle) {
        this.tasks = this.tasks.filter(task => task.taskTitle !== taskTitle);
    }
}