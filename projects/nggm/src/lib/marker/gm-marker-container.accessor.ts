import {InjectionToken} from '@angular/core';

export type GmMarkerContainerAccessor =
    | google.maps.Map
    | google.maps.StreetViewPanorama;

export const GM_MARKER_CONTAINER_ACCESSOR = new InjectionToken<
    GmMarkerContainerAccessor
>('GM_MARKER_CONTAINER_ACCESSOR');
