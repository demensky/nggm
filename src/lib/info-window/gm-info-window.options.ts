import {InjectionToken} from '@angular/core';

export const GM_INFO_WINDOW_OPTIONS = new InjectionToken<
    google.maps.InfoWindowOptions
>('GM_INFO_WINDOW_OPTIONS', {
    providedIn: 'root',
    factory: () => ({}),
});
