export class Task {
    title: string;
    isComplete: boolean;
    createAt: Date;

    constructor(task) {
        this.title = task.title;
        this.isComplete = task.isComplete;
        this.createAt = task.createAt;
    }
}
