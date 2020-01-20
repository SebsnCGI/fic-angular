import {Injectable} from '@angular/core';
import {Task} from './_model/task.model';

@Injectable({
    providedIn: 'root',
})
export class TaskService {

    getTasks(): Task[] {
        return [
            new Task({title: 'Task 1', description: 'Content of task 1', isComplete: false, createAt: new Date()}),
            new Task({title: 'Task 2', description: 'Content of task 2', isComplete: false, createAt: new Date()}),
            new Task({title: 'Task 3', description: 'Content of task 3', isComplete: false, createAt: new Date()}),
        ];
    }
}
