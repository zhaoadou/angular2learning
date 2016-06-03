import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {HeaderComponent} from './header.component';
import { ForgotFormComponent } from './forgot-form.component';
import { ResetFormComponent } from './reset-form.component';


@Component({
    selector: 'password-reset-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ForgotFormComponent],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/forgot',
        name: 'Forgot',
        component: ForgotFormComponent,
        useAsDefault: true
    },
    {
        path: '/reset',
        name: 'Reset',
        component: ResetFormComponent
    }
])

/**
 * AppComponent
 */
export class AppComponent { }