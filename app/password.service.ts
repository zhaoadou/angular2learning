
import { Injectable } from '@angular/core';

import { ForgotModel } from "./forgot"
import { ResetModel } from "./reset"
import { MSG } from "./msg.jp"
import { UserError } from './user.error';

@Injectable()
export class PasswordResetService {

    /**
     * check whether the mail address of user input is exist. 
     * 
     * @private
     * @param {ForgotModel} model (description)
     * @returns {boolean} (description)
     */
    private isValidForgotModel(model: ForgotModel): Promise<any> {
        return Promise.resolve([]);
    }
    
     /**
     * check whether the mail address of user input is exist. 
     * 
     * @private
     * @param {ForgotModel} model (description)
     * @returns {boolean} (description)
     */
    private isValidResetModel(model: ResetModel): Promise<any> {
        return Promise.resolve([MSG.VERRIFICATIONCODE_NOT_EXIST]);
    }
    

    /**
     * request to server for reset password mail
     * if the mail address is valid.
     * 
     * @param {ForgotModel} model (description)
     */
    public save(model:ForgotModel):Promise<any> {
        return this.isValidForgotModel(model)
        .then(errors=>{
            if (errors.length != 0) {
                throw new UserError(errors);
            } else {
                return this.postForRequest(model);
            }
        });
    }

    private postForRequest(model: ForgotModel): Promise<any> {
        return Promise.resolve([MSG.MAILSEND_SUCCESS]);;
    }
    
    /**
     * request to server for reset password for selected system.
     * if the mail address is valid.
     * 
     * @param {ForgotModel} model (description)
     */
    public resetPassword(model:ResetModel) :Promise<any> {
        return this.isValidResetModel(model)
        .then(errors=>{
            if (errors.length != 0) {
                throw new UserError(errors);
            } else {
                return this.postForReset(model);
            }
        });
    }

    private postForReset(model: ResetModel): Promise<any> {
        return Promise.resolve([MSG.PASSWORD_RESET_SUCCESS]);
    }
}