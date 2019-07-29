import {InjectionToken} from '@angular/core';
import {GmEventTarget} from '../../interfaces/gm-event-accessor';

export const GM_EVENT_CLICK_ACCESSOR = new InjectionToken<
    GmEventTarget<'click', MouseEvent>
>('GM_EVENT_CLICK_ACCESSOR');
