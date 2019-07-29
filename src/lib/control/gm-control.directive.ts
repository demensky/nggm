import {
    Attribute,
    Directive,
    ElementRef,
    Inject,
    OnDestroy,
    Self,
    SkipSelf,
} from '@angular/core';
import {GmControlContainer} from './gm-control-container';
import {GM_CONTROL_CONTAINER_ACCESSOR} from './gm-control-container.accessor';

// @dynamic
@Directive({selector: '[gmControl]', exportAs: 'gmControl'})
export class GmControlDirective implements OnDestroy {
    public constructor(
        @Inject(GM_CONTROL_CONTAINER_ACCESSOR)
        @SkipSelf()
        private readonly _container: GmControlContainer,
        @Self() private readonly _elementRef: ElementRef<HTMLElement>,
        @Attribute('gmControl')
        private readonly _typeName: keyof typeof google.maps.ControlPosition,
    ) {
        _container.controls[google.maps.ControlPosition[_typeName]].push(
            _elementRef.nativeElement,
        );
    }

    public ngOnDestroy(): void {
        const controls = this._container.controls[
            google.maps.ControlPosition[this._typeName]
        ];
        controls.removeAt(
            controls.getArray().indexOf(this._elementRef.nativeElement),
        );
    }
}
