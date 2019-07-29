import {Directive} from '@angular/core';
import {GM_CONTROL_CONTAINER_ACCESSOR} from './gm-control-container.accessor';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'gm-map',
    providers: [
        {provide: GM_CONTROL_CONTAINER_ACCESSOR, useExisting: google.maps.Map},
    ],
})
export class GmControlMapContainerDirective {}
