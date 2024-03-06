import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdsLocaleService {
  constructor() {}

  formatNumber(value: any) {
    return Soho.Locale.formatNumber(value);
  }

  parseNumber(value: string) {
    return Soho.Locale.parseNumber(value);
  }
}
