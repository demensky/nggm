import {Directive} from '@angular/core';
import {GM_ZOOM_VALUE_ACCESSOR} from '../../common/values/gm-zoom-value.accessor';

@Directive({
    selector: 'gm-map[gmZoom], gm-map[gmZoomChange]',
    providers: [
        {provide: GM_ZOOM_VALUE_ACCESSOR, useExisting: google.maps.Map},
    ],
})
export class GmMapZoomValueDirective {}
