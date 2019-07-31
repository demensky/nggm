import {Directive, Inject, Input, Output, Self} from '@angular/core';
import {LatLngValueObservable} from '../../utils/lat-lng-value-observable';
import {GM_POSITION_ACCESSOR} from '../accessors/gm-position.accessor';

// @dynamic
@Directive({selector: '[gmPosition]', exportAs: 'gmPosition'})
export class GmPositionDirective {
    @Input() set gmPosition(value: google.maps.LatLng) {
        this.gmPositionChange.next(value);
    }

    @Output() public readonly gmPositionChange: LatLngValueObservable;

    public constructor(
        @Inject(GM_POSITION_ACCESSOR) @Self() target: google.maps.MVCObject,
    ) {
        this.gmPositionChange = new LatLngValueObservable(target, 'position');
    }
}
