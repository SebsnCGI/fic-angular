import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TaskCountService {

    private nbTasksEmitter: EventEmitter<number> = new EventEmitter<number>();
    nbTasks: number = 3;

    constructor() {
    }

    getNbTasks(): EventEmitter<number> {
        return this.nbTasksEmitter;
    }

    addTask(): void {
        this.nbTasks += 1;
        this.nbTasksEmitter.emit(this.nbTasks);
    }
}
