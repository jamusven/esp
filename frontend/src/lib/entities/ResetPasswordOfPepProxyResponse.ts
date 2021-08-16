// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IResetPasswordOfPepProxyResponse {
    new_password: string;
}

export default class ResetPasswordOfPepProxyResponse {
    readonly _new_password: string;

    get newPassword(): string {
        return this._new_password;
    }

    static newPasswordValidate(newPassword: string): boolean {
        return typeof newPassword === 'string' && !!newPassword.trim();
    }

    constructor(props: IResetPasswordOfPepProxyResponse) {
        this._new_password = props.new_password.trim();
    }

    serialize(): IResetPasswordOfPepProxyResponse {
        const data: IResetPasswordOfPepProxyResponse = {
            new_password: this._new_password,
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            new_password:
                typeof this._new_password === 'string' && !this._new_password
                    ? true
                    : this._new_password,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(
        props: Partial<IResetPasswordOfPepProxyResponse>,
    ): ResetPasswordOfPepProxyResponse {
        return new ResetPasswordOfPepProxyResponse({
            ...this.serialize(),
            ...props,
        });
    }
}
