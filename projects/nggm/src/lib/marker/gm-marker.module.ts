import {NgModule} from '@angular/core';
import {GmMarkerEventClickDirective} from './gm-marker-event-click.directive';
import {GmMarkerEventDblclickDirective} from './gm-marker-event-dblclick.directive';
import {GmMarkerMapContainerDirective} from './gm-marker-map-container.directive';
import {GmMarkerComponent} from './gm-marker.component';
import {GmMarkerDraggableValueDirective} from './values/gm-marker-draggable-value.directive';
import {GmMarkerOpacityValueDirective} from './values/gm-marker-opacity-value.directive';
import {GmMarkerPositionValueDirective} from './values/gm-marker-position-value.directive';

@NgModule({
    declarations: [
        GmMarkerEventClickDirective,
        GmMarkerEventDblclickDirective,
        GmMarkerMapContainerDirective,
        GmMarkerComponent,
        GmMarkerDraggableValueDirective,
        GmMarkerOpacityValueDirective,
        GmMarkerPositionValueDirective,
    ],
    exports: [
        GmMarkerEventClickDirective,
        GmMarkerEventDblclickDirective,
        GmMarkerMapContainerDirective,
        GmMarkerComponent,
        GmMarkerDraggableValueDirective,
        GmMarkerOpacityValueDirective,
        GmMarkerPositionValueDirective,
    ],
})
export class GmMarkerModule {}
