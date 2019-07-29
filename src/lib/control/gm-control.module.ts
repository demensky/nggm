import {NgModule} from '@angular/core';
import {GmControlMapContainerDirective} from './gm-control-map-container.directive';
import {GmControlDirective} from './gm-control.directive';

@NgModule({
    declarations: [GmControlMapContainerDirective, GmControlDirective],
    exports: [GmControlMapContainerDirective, GmControlDirective],
})
export class GmControlModule {}
