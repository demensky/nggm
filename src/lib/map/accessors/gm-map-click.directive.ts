import {Directive} from '@angular/core';
import {GM_CLICK_ACCESSOR} from '../../common/accessors/gm-click.accessor';

@Directive({
    selector: 'gm-map[gmClick]',
    providers: [{provide: GM_CLICK_ACCESSOR, useExisting: google.maps.Map}],
})
export class GmMapClickDirective {}
