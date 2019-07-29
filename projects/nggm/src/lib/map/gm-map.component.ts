import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
} from '@angular/core';
import {GM_MAP_OPTIONS} from './gm-map.options';

// @dynamic
@Component({
    selector: 'gm-map',
    exportAs: 'gmMap',
    templateUrl: './gm-map.component.html',
    styleUrls: ['./gm-map.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: google.maps.Map, useExisting: GmMapComponent}],
})
export class GmMapComponent extends google.maps.Map {
    public constructor(
        @Inject(GM_MAP_OPTIONS) options: google.maps.MapOptions,
        {nativeElement}: ElementRef<HTMLElement>,
        changeDetectorRef: ChangeDetectorRef,
    ) {
        super(nativeElement, options);
        changeDetectorRef.detach();
    }
}
