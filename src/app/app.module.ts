import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { HeaderComponent } from './header/header.component';
import {AppComponent} from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
