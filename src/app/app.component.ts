import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'fic-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private title: Title) {
        title.setTitle('Task Manager');
    }
}
