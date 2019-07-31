import {Directive} from '@angular/core';
import {GM_POSITION_ACCESSOR} from '../../common/accessors/gm-position.accessor';

@Directive({
    selector: 'gm-info-window[gmPosition], gm-info-window[gmPositionChange]',
    providers: [
        {provide: GM_POSITION_ACCESSOR, useExisting: google.maps.InfoWindow},
    ],
})
export class GmInfoWindowPositionDirective {}
