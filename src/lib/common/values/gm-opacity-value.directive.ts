import {Directive, Inject, Input, Output, Self} from '@angular/core';
import {MvcValueObservable} from '../../utils/mvc-value-observable';
import {GM_OPACITY_VALUE_ACCESSOR} from './gm-opacity-value.accessor';

// @dynamic
@Directive({selector: '[gmOpacity], [gmOpacityChange]', exportAs: 'gmOpacity'})
export class GmOpacityValueDirective {
    @Input() set gmOpacity(value: number) {
        this.gmOpacityChange.next(value);
    }

    @Output() private readonly gmOpacityChange: MvcValueObservable<number>;

    public constructor(
        @Inject(GM_OPACITY_VALUE_ACCESSOR)
        @Self()
        target: google.maps.MVCObject,
    ) {
        this.gmOpacityChange = new MvcValueObservable<number>(
            target,
            'opacity',
        );
    }
}
