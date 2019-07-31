import {Directive} from '@angular/core';
import {GM_OPACITY_ACCESSOR} from '../../common/accessors/gm-opacity.accessor';

@Directive({
    selector: 'gm-marker[gmOpacity], gm-marker[gmOpacityChange]',
    providers: [
        {provide: GM_OPACITY_ACCESSOR, useExisting: google.maps.Marker},
    ],
})
export class GmMarkerOpacityDirective {}
