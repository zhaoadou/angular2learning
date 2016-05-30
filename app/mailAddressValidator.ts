
import { Injectable } from '@angular/core';

import { Control, Validator, AbstractControl} from '@angular/common';

@Injectable() 
export class MailAddressValidator implements Validator {
    validate(c: AbstractControl): { [key: string]: any } {
        var v = new Object(c.value);
        if (v == "") {return null;}
        if (v != "" &&  v.toString().indexOf('@basenet.co.jp') > 0) { return null;}
        else {
            return {
                "mailAddressInvalid":true
            };
        }
    }
}