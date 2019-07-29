import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnDestroy,
} from '@angular/core';
import {
    GM_MARKER_CONTAINER_ACCESSOR,
    GmMarkerContainerAccessor,
} from './gm-marker-container.accessor';
import {GM_MARKER_OPTIONS} from './gm-marker.options';

// @dynamic
@Component({
    selector: 'gm-marker',
    exportAs: 'gmMarker',
    templateUrl: './gm-marker.component.html',
    providers: [{provide: google.maps.Marker, useExisting: GmMarkerComponent}],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmMarkerComponent extends google.maps.Marker implements OnDestroy {
    public constructor(
        @Inject(GM_MARKER_OPTIONS)
        options: google.maps.ReadonlyMarkerOptions,
        @Inject(GM_MARKER_CONTAINER_ACCESSOR)
        container: GmMarkerContainerAccessor,
    ) {
        super(options);
        this.setMap(container);
    }

    public ngOnDestroy(): void {
        this.setMap(null);
    }
}
