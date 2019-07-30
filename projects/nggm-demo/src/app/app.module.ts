import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {GmCommonModule} from '../../../../src/lib/common/gm-common.module';
import {GmMapModule} from '../../../../src/lib/map/gm-map.module';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, GmMapModule, GmCommonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
