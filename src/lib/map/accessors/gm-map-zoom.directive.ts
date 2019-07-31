import {Directive} from '@angular/core';
import {GM_ZOOM_ACCESSOR} from '../../common/accessors/gm-zoom.accessor';

@Directive({
    selector: 'gm-map[gmZoom], gm-map[gmZoomChange]',
    providers: [{provide: GM_ZOOM_ACCESSOR, useExisting: google.maps.Map}],
})
export class GmMapZoomDirective {}
