import {InjectionToken} from '@angular/core';
import {GmEventTarget} from '../../interfaces/gm-event-accessor';

export const GM_EVENT_DBLCLICK_ACCESSOR = new InjectionToken<
    GmEventTarget<'dblclick', MouseEvent>
>('GM_EVENT_DBLCLICK_ACCESSOR');
