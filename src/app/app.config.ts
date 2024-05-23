import { ApplicationConfig } from '@angular/core';
import {provideRouter} from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'firstComponent', component: FirstPageComponent },
      { path: 'secondComponent/:colors', component: SecondPageComponent },
      { path: '**', redirectTo: 'firstComponent' },
      ]), provideHttpClient(),
  ]
};


