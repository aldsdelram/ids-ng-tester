import { InjectionToken, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// https: indepth.dev/posts/1440/global-objects-in-angular

export const WINDOW = new InjectionToken<Window>(
  'An abstraction over global window object',
  {
    factory: () => inject(DOCUMENT).defaultView as Window,
  }
);
