import {Directive} from '@angular/core';
import {GM_DRAGGABLE_VALUE_ACCESSOR} from '../../common/values/gm-draggable-value.accessor';

@Directive({
    selector: 'gm-map[gmDraggable], gm-map[gmDraggableChange]',
    providers: [
        {provide: GM_DRAGGABLE_VALUE_ACCESSOR, useExisting: google.maps.Map},
    ],
})
export class GmMapDraggableValueDirective {}
