import {Directive} from '@angular/core';
import {GM_DBLCLICK_ACCESSOR} from '../../common/accessors/gm-dblclick.accessor';

@Directive({
    selector: 'gm-marker[gmDblclick]',
    providers: [
        {provide: GM_DBLCLICK_ACCESSOR, useExisting: google.maps.Marker},
    ],
})
export class GmMarkerDblclickDirective {}
