import { LOCALE_ID, Inject, Injectable } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

export interface Translation {
  id: string;
  value: string;
  comment: string;
}

/**
 * Initialise the locale service BEFORE the root application component is
 * loaded.  Simply add the module to the root module, and the initialiser
 * will be automatically added.
 */
@Injectable({
  providedIn: 'root',
})
export class LocaleInitializerService {
  language: string;

  /**
   * Constructor.
   *
   * @param locale the locale being displayed.
   * @param baseHref the base url of the web app
   */
  constructor(
    @Inject(LOCALE_ID) private readonly locale: string,
    @Inject(APP_BASE_HREF) private readonly baseHref: string
  ) {
    this.language = this.locale.substr(0, 2);
    console.log(
      `locale=${locale}, baseHref=${baseHref}, language=${this.language}`
    );
  }

  async initialize() {
    console.log(
      `Setting Soho.Locale.culturesPath = ${this.baseHref}assets/ids-enterprise/js/cultures/`
    );
    Soho.Locale.culturesPath = `${this.baseHref}assets/ids-enterprise/js/cultures/`;

    await Soho.Locale.set(this.locale).then(() => {
      const currentLanguageName = Soho.Locale.currentLanguage.name;
      const currentLanguageNativeName = Soho.Locale.currentLanguage.nativeName;
      const translations: Translation[] = []; // <-- set this to the additional translations
      // ... once loaded (async if required), merge the translations into the core set.
      Soho.Locale.extendTranslations(currentLanguageName, translations);
      console.log(`${currentLanguageNativeName} loaded and extended.`);
    });
  }
}

export function LocaleInitializerFactory(service: LocaleInitializerService) {
  return () => {
    console.log("initialize")
    service.initialize();
  }
}
