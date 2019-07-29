import {Directive} from '@angular/core';
import {GM_POSITION_VALUE_ACCESSOR} from '../../common/values/gm-position-value.accessor';

@Directive({
    selector: 'gm-info-window[gmPosition], gm-info-window[gmPositionChange]',
    providers: [
        {
            provide: GM_POSITION_VALUE_ACCESSOR,
            useExisting: google.maps.InfoWindow,
        },
    ],
})
export class GmInfoWindowPositionValueDirective {}
