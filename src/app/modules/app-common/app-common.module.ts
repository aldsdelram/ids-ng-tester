import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SohoComponentsModule,
  SohoModalDialogService,
} from 'ids-enterprise-ng';
import { SohoLocaleInitializerModule } from '@modules/locale-initializer/locale-initializer.module';
import { LetDirective } from '@ngrx/component';

const exportedModules = [CommonModule, SohoComponentsModule, LetDirective];

@NgModule({
  declarations: [],
  imports: [SohoLocaleInitializerModule, ...exportedModules],
  exports: [...exportedModules],
  providers: [SohoModalDialogService],
})
export class AppCommonModule {}
