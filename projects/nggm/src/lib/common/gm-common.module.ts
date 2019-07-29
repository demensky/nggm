import {NgModule} from '@angular/core';
import {GmEventClickDirective} from './events/gm-event-click.directive';
import {GmEventCloseclickDirective} from './events/gm-event-closeclick.directive';
import {GmEventDblclickDirective} from './events/gm-event-dblclick.directive';
import {GmCenterValueDirective} from './values/gm-center-value.directive';
import {GmDraggableValueDirective} from './values/gm-draggable-value.directive';
import {GmOpacityValueDirective} from './values/gm-opacity-value.directive';
import {GmPositionValueDirective} from './values/gm-position-value.directive';
import {GmZoomValueDirective} from './values/gm-zoom-value.directive';

@NgModule({
    declarations: [
        GmEventClickDirective,
        GmEventCloseclickDirective,
        GmEventDblclickDirective,
        GmCenterValueDirective,
        GmDraggableValueDirective,
        GmOpacityValueDirective,
        GmPositionValueDirective,
        GmZoomValueDirective,
    ],
    exports: [
        GmEventClickDirective,
        GmEventCloseclickDirective,
        GmEventDblclickDirective,
        GmCenterValueDirective,
        GmDraggableValueDirective,
        GmOpacityValueDirective,
        GmPositionValueDirective,
        GmZoomValueDirective,
    ],
})
export class GmCommonModule {}
