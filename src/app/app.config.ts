import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { SohoLocaleInitializerModule } from '@modules/locale-initializer/locale-initializer.module';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([SohoLocaleInitializerModule, AppCommonModule]),
    provideStore()
],
};
