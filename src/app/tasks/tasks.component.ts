import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../_model/task.model';

@Component({
    selector: 'fic-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
    @Input() tasks: Task[] = [];
    @Output() readonly taskSelected: EventEmitter<Task> = new EventEmitter<Task>();

    selectTask(task: Task) {
        this.taskSelected.emit(task);
    }
}
