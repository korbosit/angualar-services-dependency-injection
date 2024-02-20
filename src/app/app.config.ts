import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { SubscribeService } from './Services/subscribe.service';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE');

export const appConfig: ApplicationConfig = {
  // providers: [
  //   provideRouter(routes),
  //   provideClientHydration(),
  //   SubscribeService,
  //   UserService,
  //   LoggerService,
  // ],
  // providers: [
  //   provideRouter(routes),
  //   provideClientHydration(),
  //   SubscribeService,
  //   { provide: UserService, useClass: UserService },
  //   LoggerService,
  // ],
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    SubscribeService,
    { provide: USER_TOKEN, useClass: UserService },
    // LoggerService,
  ],
};
