import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { SohoLocaleInitializerModule } from '@modules/locale-initializer/locale-initializer.module';

const exportedModules = [CommonModule, SohoComponentsModule];

@NgModule({
  declarations: [],
  imports: [SohoLocaleInitializerModule, ...exportedModules],
  exports: [...exportedModules],
})
export class AppCommonModule {}