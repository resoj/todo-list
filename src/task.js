export class Task {
    constructor(taskTitle, description, dueDate, priority, complete=false) {
        this.taskTitle = taskTitle;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }
}