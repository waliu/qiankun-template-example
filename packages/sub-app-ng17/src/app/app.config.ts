import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_BASE_HREF } from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // @ts-ignore
    {provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/app-ng17' : '/'}
  ]
};
