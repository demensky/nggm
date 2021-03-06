import {Directive, Inject, Output, Self} from '@angular/core';
import {Observable} from 'rxjs';
import {GmEventTarget} from '../../interfaces/gm-event-accessor';
import {GmEventObservable} from '../../utils/gm-event-observable';
import {GM_CLICK_ACCESSOR} from '../accessors/gm-click.accessor';

@Directive({selector: '[gmClick]', exportAs: 'gmClick'})
export class GmClickDirective<T extends MouseEvent> {
    @Output() public readonly gmClick: Observable<T>;

    public constructor(
        @Inject(GM_CLICK_ACCESSOR) @Self() target: GmEventTarget<'click', T>,
    ) {
        this.gmClick = new GmEventObservable(target, 'click');
    }
}
