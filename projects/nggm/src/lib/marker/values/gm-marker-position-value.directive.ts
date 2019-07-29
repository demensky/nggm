import {Directive} from '@angular/core';
import {GM_POSITION_VALUE_ACCESSOR} from '../../common/values/gm-position-value.accessor';

@Directive({
    selector: 'gm-marker[gmPosition], gm-marker[gmPositionChange]',
    providers: [
        {
            provide: GM_POSITION_VALUE_ACCESSOR,
            useExisting: google.maps.Marker,
        },
    ],
})
export class GmMarkerPositionValueDirective {}
