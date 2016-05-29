import { Component } from '@angular/core';

import {HeaderComponent} from './header.component';
import { ForgotFormComponent } from './forgot-form.component';


@Component({
    selector:'password-reset-app',
    templateUrl : 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    directives: [HeaderComponent,ForgotFormComponent]
})

/**
 * AppComponent
 */
export class AppComponent {}