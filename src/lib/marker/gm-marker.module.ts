import {NgModule} from '@angular/core';
import {GmMarkerClickDirective} from './accessors/gm-marker-click.directive';
import {GmMarkerDblclickDirective} from './accessors/gm-marker-dblclick.directive';
import {GmMarkerDraggableDirective} from './accessors/gm-marker-draggable.directive';
import {GmMarkerOpacityDirective} from './accessors/gm-marker-opacity.directive';
import {GmMarkerPositionDirective} from './accessors/gm-marker-position.directive';
import {GmMarkerMapContainerDirective} from './gm-marker-map-container.directive';
import {GmMarkerComponent} from './gm-marker.component';

@NgModule({
    declarations: [
        GmMarkerClickDirective,
        GmMarkerDblclickDirective,
        GmMarkerDraggableDirective,
        GmMarkerOpacityDirective,
        GmMarkerPositionDirective,
        GmMarkerMapContainerDirective,
        GmMarkerComponent,
    ],
    exports: [
        GmMarkerClickDirective,
        GmMarkerDblclickDirective,
        GmMarkerDraggableDirective,
        GmMarkerOpacityDirective,
        GmMarkerPositionDirective,
        GmMarkerMapContainerDirective,
        GmMarkerComponent,
    ],
})
export class GmMarkerModule {}
