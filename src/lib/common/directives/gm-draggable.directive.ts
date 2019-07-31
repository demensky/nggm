import {Directive, Inject, Input, Self} from '@angular/core';
import {MvcValueObservable} from '../../utils/mvc-value-observable';
import {GM_DRAGGABLE_ACCESSOR} from '../accessors/gm-draggable.accessor';

// @dynamic
@Directive({
    selector: '[gmDraggable], [gmDraggableChange]',
    exportAs: 'gmDraggable',
})
export class GmDraggableDirective {
    @Input() set gmDraggable(value: boolean) {
        this.gmDraggableChange.next(value);
    }

    @Input() public readonly gmDraggableChange: MvcValueObservable<boolean>;

    public constructor(
        @Inject(GM_DRAGGABLE_ACCESSOR) @Self() target: google.maps.MVCObject,
    ) {
        this.gmDraggableChange = new MvcValueObservable<boolean>(
            target,
            'draggable',
        );
    }
}
