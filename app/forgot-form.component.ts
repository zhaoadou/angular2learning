import { Component,Input } from '@angular/core';

import { FormBuilder,NgForm,Control, Validators} from '@angular/common';

import { MailAddressValidator } from './mailAddressValidator';

import { ForgotModel } from './forgot';

import { PasswordResetService } from './password.service';

import {UserError} from './user.error.ts';


@Component({
    selector: 'forgot-form',
    templateUrl: 'app/forgot-form.html',
    styleUrls: ['app/forgot-form.css'],
    providers: [PasswordResetService]
})

export class ForgotFormComponent {
    
    forgotForm :any;
    
    constructor(private _formBuilder : FormBuilder,private _mailAddressValidator:MailAddressValidator,private passwordService : PasswordResetService) {
        this.forgotForm =this._formBuilder.group({
            'name':['',Validators.required],
            'address':['',Validators.compose([Validators.required,_mailAddressValidator.validate])]
        });
    }

    private expectedSysmtemNames = [
        {
            name: "bcore",
            value: "1"
        },
        {
            name: "b.office",
            value: "2"
        },
        {
            name: "bpersonal",
            value: "3"
        }
    ];

    success: boolean = false;

    submitting = false;

    public messages: string[] = [];

    public errors: string[] = [];

    @Input() model: ForgotModel = new ForgotModel("1");
    
    getCurrentModelSystemName() :any {
        return this.expectedSysmtemNames.find(item=>item.value===this.model.systemIdx).name;
    }

    onReset() {
        console.log("reset fired.");
        this.model = new ForgotModel("1");
    }

    onSubmit() {
        this.submitting = true;
        this.passwordService.save(this.model)
            .then(args => {
                this.submitting = false;
                this.messages = args ||[];
                this.success = true;
                return args;
            }, (args:UserError) => {
                this.submitting = false;
                this.errors =  args.errors || [];
                return args;
            })
            .catch(this.handlerError);
    }

    getCurrentModel() {
        return JSON.stringify(this.model);
    }
    private handlerError(e: any) {
        console.log(e);
    }
}
