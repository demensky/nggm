import {Directive, Inject, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {GmEventTarget} from '../../interfaces/gm-event-accessor';
import {GmEventObservable} from '../../utils/gm-event-observable';
import {GM_CLOSECLICK_ACCESSOR} from '../accessors/gm-closeclick.accessor';

@Directive({selector: '[gmCloseclick]', exportAs: 'gmCloseclick'})
export class GmCloseclickDirective<T> {
    @Output() public readonly gmCloseclick: Observable<T>;

    public constructor(
        @Inject(GM_CLOSECLICK_ACCESSOR) target: GmEventTarget<'closeclick', T>,
    ) {
        this.gmCloseclick = new GmEventObservable(target, 'closeclick');
    }
}
