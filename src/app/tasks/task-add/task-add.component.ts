import {Component} from '@angular/core';
import {TaskCountService} from '../../services/task-count.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TaskService} from '../../services/task.service';
import {Task} from '../../_model/task.model';
import {Router} from '@angular/router';

@Component({
    selector: 'fic-task-add',
    templateUrl: './task-add.component.html',
    styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {

    taskGroup: FormGroup;

    titleCtrl: FormControl = new FormControl(null, [Validators.required]);

    descriptionCtrl: FormControl = new FormControl(null, [Validators.required]);

    constructor(private count: TaskCountService, private task: TaskService, private fb: FormBuilder, private router: Router) {
        this.taskGroup = fb.group({
            title: this.titleCtrl,
            description: this.descriptionCtrl,
        });
    }

    submit() {
        if(this.taskGroup.valid) {
            this.task.addTask(new Task({
                title: this.taskGroup.value.title,
                description: this.taskGroup.value.description,
                createAt: new Date(),
                updateAt: null
            }));
            this.count.addTask();

            this.router.navigate(['/', 'tasks']);
        }
    }

    addTask() {
        this.count.addTask();
    }

}
