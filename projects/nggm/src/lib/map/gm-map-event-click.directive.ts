import {Directive} from '@angular/core';
import {GM_EVENT_CLICK_ACCESSOR} from '../common/events/gm-event-click.accessor';

@Directive({
    selector: 'gm-map[gmClick]',
    providers: [
        {provide: GM_EVENT_CLICK_ACCESSOR, useExisting: google.maps.Map},
    ],
})
export class GmMapEventClickDirective {}
