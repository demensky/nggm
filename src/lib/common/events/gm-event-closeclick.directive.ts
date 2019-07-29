import {Directive, Inject, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {GmEventTarget} from '../../interfaces/gm-event-accessor';
import {GmEventObservable} from '../../utils/gm-event-observable';
import {GM_EVENT_CLOSECLICK_ACCESSOR} from './gm-event-closeclick.accessor';

@Directive({selector: '[gmCloseclick]', exportAs: 'gmCloseclick'})
export class GmEventCloseclickDirective<T> {
    @Output() public readonly gmCloseclick: Observable<T>;

    public constructor(
        @Inject(GM_EVENT_CLOSECLICK_ACCESSOR)
        target: GmEventTarget<'closeclick', T>,
    ) {
        this.gmCloseclick = new GmEventObservable(target, 'closeclick');
    }
}
