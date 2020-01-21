import {Component, OnInit} from '@angular/core';
import {TaskCountService} from '../../services/task-count.service';

@Component({
    selector: 'fic-task-add',
    templateUrl: './task-add.component.html',
    styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {

    constructor(private count: TaskCountService) {
    }

    addTask() {
      this.count.addTask();
    }

}
