import Permission, {IPermission} from './Permission';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface ICreateAPermissionResponse {
    permission: IPermission;
}

export default class CreateAPermissionResponse {
    readonly _permission: Permission;

    get permission(): Permission {
        return this._permission;
    }

    constructor(props: ICreateAPermissionResponse) {
        this._permission = new Permission(props.permission);
    }

    serialize(): ICreateAPermissionResponse {
        const data: ICreateAPermissionResponse = {
            permission: this._permission.serialize(),
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            permission: this._permission.validate().length === 0,
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
        props: Partial<ICreateAPermissionResponse>,
    ): CreateAPermissionResponse {
        return new CreateAPermissionResponse({...this.serialize(), ...props});
    }
}
