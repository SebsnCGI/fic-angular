export class Task {
    title: string;
    isComplete: boolean;
    createAt: Date;
    updateAt: Date;

    constructor(task) {
        this.title = task.title;
        this.isComplete = task.isComplete;
        this.createAt = task.createAt;
        this.updateAt = task.updateAt;
    }
}
