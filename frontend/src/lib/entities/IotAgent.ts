// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IIotAgent {
    id?: string;
    oauth_client_id?: string;
    password?: string;
}

export default class IotAgent {
    readonly _id: string | undefined;

    get id(): string | undefined {
        return this._id;
    }

    readonly _oauth_client_id: string | undefined;

    get oauthClientId(): string | undefined {
        return this._oauth_client_id;
    }

    readonly _password: string | undefined;

    get password(): string | undefined {
        return this._password;
    }

    constructor(props: IIotAgent) {
        if (typeof props.id === 'string') {
            this._id = props.id.trim();
        }
        if (typeof props.oauth_client_id === 'string') {
            this._oauth_client_id = props.oauth_client_id.trim();
        }
        if (typeof props.password === 'string') {
            this._password = props.password.trim();
        }
    }

    serialize(): IIotAgent {
        const data: IIotAgent = {};
        if (typeof this._id !== 'undefined') {
            data.id = this._id;
        }
        if (typeof this._oauth_client_id !== 'undefined') {
            data.oauth_client_id = this._oauth_client_id;
        }
        if (typeof this._password !== 'undefined') {
            data.password = this._password;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            id: !this._id
                ? true
                : typeof this._id === 'string' && !this._id
                ? true
                : this._id,
            password: !this._password
                ? true
                : typeof this._password === 'string' && !this._password
                ? true
                : this._password,
            oauth_client_id: !this._oauth_client_id
                ? true
                : typeof this._oauth_client_id === 'string' &&
                  !this._oauth_client_id
                ? true
                : this._oauth_client_id,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IIotAgent>): IotAgent {
        return new IotAgent({...this.serialize(), ...props});
    }
}