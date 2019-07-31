import {Directive} from '@angular/core';
import {GM_CLOSECLICK_ACCESSOR} from '../../common/accessors/gm-closeclick.accessor';

@Directive({
    selector: 'gm-info-window[gmCloseclick]',
    providers: [
        {provide: GM_CLOSECLICK_ACCESSOR, useExisting: google.maps.InfoWindow},
    ],
})
export class GmInfoWindowCloseclickDirective {}
