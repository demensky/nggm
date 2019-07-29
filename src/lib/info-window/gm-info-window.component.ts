import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
} from '@angular/core';
import {GM_INFO_WINDOW_OPTIONS} from './gm-info-window.options';

// @dynamic
@Component({
    selector: 'gm-info-window',
    exportAs: 'gmInfoWindow',
    templateUrl: './gm-info-window.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: google.maps.InfoWindow,
            useExisting: GmInfoWindowComponent,
        },
    ],
})
export class GmInfoWindowComponent extends google.maps.InfoWindow {
    public constructor(
        @Inject(GM_INFO_WINDOW_OPTIONS) options: google.maps.InfoWindowOptions,
        {nativeElement}: ElementRef<HTMLElement>,
        changeDetectorRef: ChangeDetectorRef,
    ) {
        super(options);
        nativeElement.remove();
        this.setContent(nativeElement);
        changeDetectorRef.detach();
    }
}
