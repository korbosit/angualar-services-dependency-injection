import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { SubscribeService } from './Services/subscribe.service';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    SubscribeService,
    UserService,
    LoggerService,
  ],
};
