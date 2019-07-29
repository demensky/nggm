import {InjectionToken} from '@angular/core';

export const GM_CENTER_VALUE_ACCESSOR = new InjectionToken<
    google.maps.MVCObject
>('GM_CENTER_VALUE_ACCESSOR');
