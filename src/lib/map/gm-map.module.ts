import {NgModule} from '@angular/core';
import {GmMapEventClickDirective} from './gm-map-event-click.directive';
import {GmMapComponent} from './gm-map.component';
import {GmMapCenterValueDirective} from './values/gm-map-center-value.directive';
import {GmMapDraggableValueDirective} from './values/gm-map-draggable-value.directive';
import {GmMapZoomValueDirective} from './values/gm-map-zoom-value.directive';

@NgModule({
    declarations: [
        GmMapCenterValueDirective,
        GmMapEventClickDirective,
        GmMapComponent,
        GmMapDraggableValueDirective,
        GmMapZoomValueDirective,
    ],
    exports: [
        GmMapCenterValueDirective,
        GmMapEventClickDirective,
        GmMapComponent,
        GmMapDraggableValueDirective,
        GmMapZoomValueDirective,
    ],
})
export class GmMapModule {}
