import {Directive} from '@angular/core';
import {GM_EVENT_CLOSECLICK_ACCESSOR} from '../common/events/gm-event-closeclick.accessor';

@Directive({
    selector: 'gm-info-window[gmCloseclick]',
    providers: [
        {
            provide: GM_EVENT_CLOSECLICK_ACCESSOR,
            useExisting: google.maps.InfoWindow,
        },
    ],
})
export class GmInfoWindowEventCloseclickDirective {}
