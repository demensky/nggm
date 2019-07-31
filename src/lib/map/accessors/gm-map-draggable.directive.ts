import {Directive} from '@angular/core';
import {GM_DRAGGABLE_ACCESSOR} from '../../common/accessors/gm-draggable.accessor';

@Directive({
    selector: 'gm-map[gmDraggable], gm-map[gmDraggableChange]',
    providers: [{provide: GM_DRAGGABLE_ACCESSOR, useExisting: google.maps.Map}],
})
export class GmMapDraggableDirective {}
