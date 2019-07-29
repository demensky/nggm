import {InjectionToken} from '@angular/core';

export const GM_POSITION_VALUE_ACCESSOR = new InjectionToken<
    google.maps.MVCObject
>('GM_POSITION_VALUE_ACCESSOR');
