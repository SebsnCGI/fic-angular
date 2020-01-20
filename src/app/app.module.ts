import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { HeaderComponent } from './header/header.component';
import {AppComponent} from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TasksComponent,
        TasksComponent,
        TaskComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
