import {NgModule} from '@angular/core';
import {GmInfoWindowEventCloseclickDirective} from './gm-info-window-event-closeclick.directive';
import {GmInfoWindowComponent} from './gm-info-window.component';
import {GmInfoWindowPositionValueDirective} from './values/gm-info-window-position-value.directive';

@NgModule({
    declarations: [
        GmInfoWindowEventCloseclickDirective,
        GmInfoWindowComponent,
        GmInfoWindowPositionValueDirective,
    ],
    exports: [
        GmInfoWindowEventCloseclickDirective,
        GmInfoWindowComponent,
        GmInfoWindowPositionValueDirective,
    ],
})
export class GmInfoWindowModule {}
