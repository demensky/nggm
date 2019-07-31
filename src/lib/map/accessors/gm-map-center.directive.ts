import {Directive} from '@angular/core';
import {GM_CENTER_ACCESSOR} from '../../common/accessors/gm-center.accessor';

@Directive({
    selector: 'gm-map[gmCenter], gm-map[gmCenterChange]',
    providers: [{provide: GM_CENTER_ACCESSOR, useExisting: google.maps.Map}],
})
export class GmMapCenterDirective {}
