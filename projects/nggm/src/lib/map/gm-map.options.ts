import {InjectionToken} from '@angular/core';

export const GM_MAP_OPTIONS = new InjectionToken<google.maps.MapOptions>(
    'GM_MAP_OPTIONS',
    {providedIn: 'root', factory: () => ({})},
);
