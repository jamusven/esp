import User, {IUser} from './User';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface ICreateAUserResponse {
    user: IUser;
}

export default class CreateAUserResponse {
    readonly _user: User;

    get user(): User {
        return this._user;
    }

    constructor(props: ICreateAUserResponse) {
        this._user = new User(props.user);
    }

    serialize(): ICreateAUserResponse {
        const data: ICreateAUserResponse = {
            user: this._user.serialize(),
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            user: this._user.validate().length === 0,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<ICreateAUserResponse>): CreateAUserResponse {
        return new CreateAUserResponse({...this.serialize(), ...props});
    }
}
