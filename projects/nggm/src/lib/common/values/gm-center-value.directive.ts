import {Directive, Inject, Input, Output, Self} from '@angular/core';
import {LatLngValueObservable} from '../../utils/lat-lng-value-observable';
import {GM_CENTER_VALUE_ACCESSOR} from './gm-center-value.accessor';

// @dynamic
@Directive({selector: '[gmCenter], [gmCenterChange]', exportAs: 'gmCenter'})
export class GmCenterValueDirective {
    @Input() set gmCenter(value: google.maps.LatLng) {
        this.gmCenterChange.next(value);
    }

    @Output() public readonly gmCenterChange: LatLngValueObservable;

    public constructor(
        @Inject(GM_CENTER_VALUE_ACCESSOR) @Self() target: google.maps.MVCObject,
    ) {
        this.gmCenterChange = new LatLngValueObservable(target, 'center');
    }
}
