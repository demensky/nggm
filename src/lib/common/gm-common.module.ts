import {NgModule} from '@angular/core';
import {GmCenterDirective} from './directives/gm-center.directive';
import {GmClickDirective} from './directives/gm-click.directive';
import {GmCloseclickDirective} from './directives/gm-closeclick.directive';
import {GmDblclickDirective} from './directives/gm-dblclick.directive';
import {GmDraggableDirective} from './directives/gm-draggable.directive';
import {GmOpacityDirective} from './directives/gm-opacity.directive';
import {GmPositionDirective} from './directives/gm-position.directive';
import {GmZoomDirective} from './directives/gm-zoom.directive';

@NgModule({
    declarations: [
        GmCenterDirective,
        GmClickDirective,
        GmCloseclickDirective,
        GmDblclickDirective,
        GmDraggableDirective,
        GmOpacityDirective,
        GmPositionDirective,
        GmZoomDirective,
    ],
    exports: [
        GmCenterDirective,
        GmClickDirective,
        GmCloseclickDirective,
        GmDblclickDirective,
        GmDraggableDirective,
        GmOpacityDirective,
        GmPositionDirective,
        GmZoomDirective,
    ],
})
export class GmCommonModule {}
