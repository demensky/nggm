import {Directive} from '@angular/core';
import {GM_DRAGGABLE_VALUE_ACCESSOR} from '../../common/values/gm-draggable-value.accessor';

@Directive({
    selector: 'gm-marker[gmDraggable], gm-marker[gmDraggableChange]',
    providers: [
        {
            provide: GM_DRAGGABLE_VALUE_ACCESSOR,
            useExisting: google.maps.Marker,
        },
    ],
})
export class GmMarkerDraggableValueDirective {}
