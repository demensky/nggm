import {Directive} from '@angular/core';
import {GM_OPACITY_VALUE_ACCESSOR} from '../../common/values/gm-opacity-value.accessor';

@Directive({
    selector: 'gm-marker[gmOpacity], gm-marker[gmOpacityChange]',
    providers: [
        {
            provide: GM_OPACITY_VALUE_ACCESSOR,
            useExisting: google.maps.Marker,
        },
    ],
})
export class GmMarkerOpacityValueDirective {}
