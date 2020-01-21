export class Task {
    title: string;
    description: string;
    isComplete: boolean;
    createAt: Date;
    updateAt: Date;

    constructor(task) {
        this.title = task.title;
        this.description = task.description;
        this.isComplete = task.isComplete;
        this.createAt = task.createAt;
        this.updateAt = task.updateAt;
    }
}
