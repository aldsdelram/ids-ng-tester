import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { SohoLocaleInitializerModule } from '@modules/locale-initializer/locale-initializer.module';
import { SharedModule } from '@modules/shared/shared.module';

const exportedModules = [CommonModule, SohoComponentsModule, SharedModule];

@NgModule({
  declarations: [],
  imports: [SohoLocaleInitializerModule, ...exportedModules],
  exports: [...exportedModules],
})
export class AppCommonModule {}
