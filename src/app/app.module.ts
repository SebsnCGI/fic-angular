import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AgoPipe } from './pipes/ago.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TasksComponent,
        TaskComponent,
        TaskAddComponent,
        TaskListComponent,
        AgoPipe,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/tasks',
                pathMatch: 'full'
            },
            {
            path: 'tasks',
            component: TasksComponent,
            children: [
                {
                    path: '',
                    component: TaskListComponent,
                },
                {
                    path: 'add',
                    component: TaskAddComponent,
                }
            ]
        }])
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
