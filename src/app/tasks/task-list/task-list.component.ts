import {Component, OnInit} from '@angular/core';
import {Task} from '../../_model/task.model';
import {TaskService} from '../../services/task.service';

@Component({
    selector: 'fic-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
    tasks: Task[];

    taskSelected: Task;

    constructor(private task: TaskService) {
    }

    ngOnInit(): void {
        this.tasks = this.task.getTasks();

        console.log(this.tasks);
    }


    selectTask(task: Task) {
        this.taskSelected = task;
    }

}
