import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SohoComponentsModule, SohoModalDialogService } from 'ids-enterprise-ng';
import { SohoLocaleInitializerModule } from '@modules/locale-initializer/locale-initializer.module';

const exportedModules = [CommonModule, SohoComponentsModule];

@NgModule({
  declarations: [],
  imports: [SohoLocaleInitializerModule, ...exportedModules],
  exports: [...exportedModules],
  providers: [SohoModalDialogService]
})
export class AppCommonModule {}
