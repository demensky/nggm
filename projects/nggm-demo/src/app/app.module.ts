import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {GmCommonModule, GmMapModule} from 'nggm';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, GmMapModule, GmCommonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
