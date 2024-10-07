import { NgModule } from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';

const standAloneComponents = [];

const standAlonePipes = [];

const standAloneDirectives = [];

@NgModule({
  declarations: [],
  imports: [AppCommonModule],
  exports: [AppCommonModule],
})
export class SharedModule {}
