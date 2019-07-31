import {NgModule} from '@angular/core';
import {GmInfoWindowCloseclickDirective} from './accessors/gm-info-window-closeclick.directive';
import {GmInfoWindowPositionDirective} from './accessors/gm-info-window-position.directive';
import {GmInfoWindowComponent} from './gm-info-window.component';

@NgModule({
    declarations: [
        GmInfoWindowCloseclickDirective,
        GmInfoWindowPositionDirective,
        GmInfoWindowComponent,
    ],
    exports: [
        GmInfoWindowCloseclickDirective,
        GmInfoWindowPositionDirective,
        GmInfoWindowComponent,
    ],
})
export class GmInfoWindowModule {}
