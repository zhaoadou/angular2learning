import { Component } from '@angular/core';

import { NgForm } from '@angular/common';

import { ResetModel } from './reset';

import { PasswordResetService } from './password.service';

import {UserError} from './user.error.ts';


@Component({
    selector: 'reset-form',
    templateUrl: 'app/reset-form.html',
    styleUrls: ['app/reset-form.css'],
    providers: [PasswordResetService]
})

export class ResetFormComponent {
    constructor(private passwordService: PasswordResetService) {
    }

    success: boolean = false;

    submitting = false;

    public messages: string[] = [];

    public errors: string[] = [];

    model: ResetModel = new ResetModel();

    onReset() {
        console.log("reset fired.");
        this.model = new ResetModel();
    }

    onSubmit() {
        // this.submitting = true;
        // this.passwordService.save(this.)
        //     .then(args => {
        //         this.submitting = false;
        //         this.messages = args ||[];
        //         this.success = true;
        //         return args;
        //     }, (args:UserError) => {
        //         this.submitting = false;
        //         this.errors =  args.errors || [];
        //         return args;
        //     })
        //     .catch(this.handlerError);
    }

    getCurrentModel() {
        return JSON.stringify(this.model);
    }
    private handlerError(e: any) {
        console.log(e);
    }
}
