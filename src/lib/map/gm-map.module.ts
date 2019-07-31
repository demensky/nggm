import {NgModule} from '@angular/core';
import {GmMapCenterDirective} from './accessors/gm-map-center.directive';
import {GmMapClickDirective} from './accessors/gm-map-click.directive';
import {GmMapDraggableDirective} from './accessors/gm-map-draggable.directive';
import {GmMapZoomDirective} from './accessors/gm-map-zoom.directive';
import {GmMapComponent} from './gm-map.component';

@NgModule({
    declarations: [
        GmMapCenterDirective,
        GmMapClickDirective,
        GmMapDraggableDirective,
        GmMapZoomDirective,
        GmMapComponent,
    ],
    exports: [
        GmMapCenterDirective,
        GmMapClickDirective,
        GmMapDraggableDirective,
        GmMapZoomDirective,
        GmMapComponent,
    ],
})
export class GmMapModule {}
