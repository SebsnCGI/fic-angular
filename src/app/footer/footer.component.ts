import {Component, OnInit} from '@angular/core';
import {TaskCountService} from '../services/task-count.service';

@Component({
    selector: 'fic-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    tasksNumber: number = 0;

    constructor(private count: TaskCountService) {
        this.tasksNumber = this.count.nbTasks;
    }

    ngOnInit(): void {
        this.count.getNbTasks().subscribe((total: number) => this.tasksNumber = total);
    }
}
