import {Directive} from '@angular/core';
import {GM_CLICK_ACCESSOR} from '../../common/accessors/gm-click.accessor';

@Directive({
    selector: 'gm-marker[gmClick]',
    providers: [{provide: GM_CLICK_ACCESSOR, useExisting: google.maps.Marker}],
})
export class GmMarkerClickDirective {}
