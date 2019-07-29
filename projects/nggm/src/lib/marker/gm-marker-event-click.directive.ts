import {Directive} from '@angular/core';
import {GM_EVENT_CLICK_ACCESSOR} from '../common/events/gm-event-click.accessor';

@Directive({
    selector: 'gm-marker[gmClick]',
    providers: [
        {provide: GM_EVENT_CLICK_ACCESSOR, useExisting: google.maps.Marker},
    ],
})
export class GmMarkerEventClickDirective {}
