import {Directive} from '@angular/core';
import {GM_POSITION_ACCESSOR} from '../../common/accessors/gm-position.accessor';

@Directive({
    selector: 'gm-marker[gmPosition], gm-marker[gmPositionChange]',
    providers: [
        {provide: GM_POSITION_ACCESSOR, useExisting: google.maps.Marker},
    ],
})
export class GmMarkerPositionDirective {}
