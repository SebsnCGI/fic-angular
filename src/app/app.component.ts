import {Component} from '@angular/core';
import {Task} from './_model/task.model';

@Component({
    selector: 'fic-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'fic-angular';

    tasks: Task[] = [
        new Task({title: 'Task 1', description: 'Content of task 1', isComplete: false, createAt: new Date()}),
        new Task({title: 'Task 2', description: 'Content of task 2', isComplete: false, createAt: new Date()}),
        new Task({title: 'Task 3', description: 'Content of task 3', isComplete: false, createAt: new Date()}),
    ];

    taskSelected: Task;

    selectTask(task: Task) {
        this.taskSelected = task;
    }

    addTask() {
        this.tasks.push(new Task({
            title: `Task ${this.tasks.length + 1}`,
            description: `Content of task ${this.tasks.length + 1}`,
            isComplete: false,
            createAt: new Date(),
        }));
    }
}
