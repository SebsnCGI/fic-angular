import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {Task} from './_model/task.model';
import {TaskService} from './services/task.service';

@Component({
    selector: 'fic-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    tasks: Task[];

    taskSelected: Task;

    constructor(private title: Title, private task: TaskService) {
        title.setTitle('Task Manager');
    }

    ngOnInit(): void {
        this.tasks = this.task.getTasks();

        console.log(this.tasks);
    }

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
