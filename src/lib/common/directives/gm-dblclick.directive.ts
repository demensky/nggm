import {Directive, Inject, Output, Self} from '@angular/core';
import {Observable} from 'rxjs';
import {GmEventTarget} from '../../interfaces/gm-event-accessor';
import {GmEventObservable} from '../../utils/gm-event-observable';
import {GM_DBLCLICK_ACCESSOR} from '../accessors/gm-dblclick.accessor';

@Directive({selector: '[gmDblclick]', exportAs: 'gmDblclick'})
export class GmDblclickDirective<T extends MouseEvent> {
    @Output() public readonly gmDblclick: Observable<T>;

    public constructor(
        @Inject(GM_DBLCLICK_ACCESSOR)
        @Self()
        target: GmEventTarget<'dblclick', T>,
    ) {
        this.gmDblclick = new GmEventObservable(target, 'dblclick');
    }
}
