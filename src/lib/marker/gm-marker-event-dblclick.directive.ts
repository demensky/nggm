import {Directive} from '@angular/core';
import {GM_EVENT_DBLCLICK_ACCESSOR} from '../common/events/gm-event-dblclick.accessor';

@Directive({
    selector: 'gm-marker[gmDblclick]',
    providers: [
        {provide: GM_EVENT_DBLCLICK_ACCESSOR, useExisting: google.maps.Marker},
    ],
})
export class GmMarkerEventDblclickDirective {}
