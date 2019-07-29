import {Directive} from '@angular/core';
import {GM_MARKER_CONTAINER_ACCESSOR} from './gm-marker-container.accessor';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'gm-map',
    providers: [
        {provide: GM_MARKER_CONTAINER_ACCESSOR, useExisting: google.maps.Map},
    ],
})
export class GmMarkerMapContainerDirective {}
