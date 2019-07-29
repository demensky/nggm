import {InjectionToken} from '@angular/core';

export const GM_CONTROL_CONTAINER_ACCESSOR = new InjectionToken<
    google.maps.MVCObject
>('GM_CONTROL_CONTAINER_ACCESSOR');
