import {Directive, Inject, Input, Output, Self} from '@angular/core';
import {LatLngValueObservable} from '../../utils/lat-lng-value-observable';
import {GM_CENTER_ACCESSOR} from '../accessors/gm-center.accessor';

// @dynamic
@Directive({selector: '[gmCenter], [gmCenterChange]', exportAs: 'gmCenter'})
export class GmCenterDirective {
    @Input() set gmCenter(value: google.maps.LatLng) {
        this.gmCenterChange.next(value);
    }

    @Output() public readonly gmCenterChange: LatLngValueObservable;

    public constructor(
        @Inject(GM_CENTER_ACCESSOR) @Self() target: google.maps.MVCObject,
    ) {
        this.gmCenterChange = new LatLngValueObservable(target, 'center');
    }
}
