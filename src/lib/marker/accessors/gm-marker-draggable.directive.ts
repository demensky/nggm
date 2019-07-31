import {Directive} from '@angular/core';
import {GM_DRAGGABLE_ACCESSOR} from '../../common/accessors/gm-draggable.accessor';

@Directive({
    selector: 'gm-marker[gmDraggable], gm-marker[gmDraggableChange]',
    providers: [
        {provide: GM_DRAGGABLE_ACCESSOR, useExisting: google.maps.Marker},
    ],
})
export class GmMarkerDraggableDirective {}
