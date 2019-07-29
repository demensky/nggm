import {Directive} from '@angular/core';
import {GM_CENTER_VALUE_ACCESSOR} from '../../common/values/gm-center-value.accessor';

@Directive({
    selector: 'gm-map[gmCenter], gm-map[gmCenterChange]',
    providers: [
        {provide: GM_CENTER_VALUE_ACCESSOR, useExisting: google.maps.Map},
    ],
})
export class GmMapCenterValueDirective {}
