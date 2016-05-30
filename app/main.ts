import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

import { PasswordResetService } from './password.service';


import { MailAddressValidator } from './mailAddressValidator';

bootstrap(AppComponent,[PasswordResetService,MailAddressValidator]);