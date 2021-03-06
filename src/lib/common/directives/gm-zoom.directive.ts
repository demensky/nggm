import {Directive, Inject, Input, Output, Self} from '@angular/core';
import {MvcValueObservable} from '../../utils/mvc-value-observable';
import {GM_ZOOM_ACCESSOR} from '../accessors/gm-zoom.accessor';

// @dynamic
@Directive({selector: '[gmZoom]', exportAs: 'gmZoom'})
export class GmZoomDirective {
    @Input() public set gmZoom(value: number) {
        this.gmZoomChange.next(value);
    }

    @Output() public readonly gmZoomChange: MvcValueObservable<number>;

    public constructor(
        @Inject(GM_ZOOM_ACCESSOR) @Self() target: google.maps.MVCObject,
    ) {
        this.gmZoomChange = new MvcValueObservable<number>(target, 'zoom');
    }
}
