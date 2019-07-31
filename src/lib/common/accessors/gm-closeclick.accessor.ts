import {InjectionToken} from '@angular/core';
import {GmEventTarget} from '../../interfaces/gm-event-accessor';

export const GM_CLOSECLICK_ACCESSOR = new InjectionToken<
    GmEventTarget<'closeclick', Event | undefined>
>('GM_CLOSECLICK_ACCESSOR');
