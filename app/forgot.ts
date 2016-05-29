
/**
 * the form model to post reset password request
 * 
 * it contains the systemName and user mailAddress.
 * 
 * @export
 * @class ForgotModel
 */
export class ForgotModel {

    constructor(
        public systemIdx?:string,
        public systemName?: string, //which system password want to reset.
        public mailAddress?: string //the mailAddress of the target user;
    ) {}
}