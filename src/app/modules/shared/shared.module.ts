import { NgModule } from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { ToolbarFlexComponent } from './components/toolbar-flex/toolbar-flex.component';

const standAloneComponents = [ToolbarFlexComponent];

const standAlonePipes = [];

const standAloneDirectives = [];

@NgModule({
  declarations: [],
  imports: [AppCommonModule, ...standAloneComponents],
  exports: [AppCommonModule, ...standAloneComponents],
})
export class SharedModule {}
