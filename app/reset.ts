
/**
 * the form model to post reset password from mail link
 * 
 * @export
 * @class ForgotModel
 */
export class ResetModel {
    public verificationCode: string;
    public systemName: number; //which system password want to reset.
    public userName: string;
    public password: string;
    public repassword: string;
}