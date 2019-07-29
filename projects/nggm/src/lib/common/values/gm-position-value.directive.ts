import {Directive, Inject, Input, Output, Self} from '@angular/core';
import {LatLngValueObservable} from '../../utils/lat-lng-value-observable';
import {GM_POSITION_VALUE_ACCESSOR} from './gm-position-value.accessor';

// @dynamic
@Directive({selector: '[gmPosition]', exportAs: 'gmPosition'})
export class GmPositionValueDirective {
    @Input() set gmPosition(value: google.maps.LatLng) {
        this.gmPositionChange.next(value);
    }

    @Output() public readonly gmPositionChange: LatLngValueObservable;

    public constructor(
        @Inject(GM_POSITION_VALUE_ACCESSOR)
        @Self()
        target: google.maps.MVCObject,
    ) {
        this.gmPositionChange = new LatLngValueObservable(target, 'position');
    }
}
