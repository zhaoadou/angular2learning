export class UserError extends  Error {
    public errors :any;
    constructor(errors :any) {
        super("some error happened.");
        this.errors = errors;
    }
}