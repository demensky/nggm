import {InjectionToken} from '@angular/core';

export const GM_MARKER_OPTIONS = new InjectionToken<
    google.maps.ReadonlyMarkerOptions
>('GM_MARKER_OPTIONS', {providedIn: 'root', factory: () => ({})});
