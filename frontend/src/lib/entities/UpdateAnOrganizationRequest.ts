import Organization, {IOrganization} from './Organization';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IUpdateAnOrganizationRequest {
    organization: IOrganization;
}

export default class UpdateAnOrganizationRequest {
    readonly _organization: Organization;

    get organization(): Organization {
        return this._organization;
    }

    constructor(props: IUpdateAnOrganizationRequest) {
        this._organization = new Organization(props.organization);
    }

    serialize(): IUpdateAnOrganizationRequest {
        const data: IUpdateAnOrganizationRequest = {
            organization: this._organization.serialize(),
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            organization: this._organization.validate().length === 0,
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
        props: Partial<IUpdateAnOrganizationRequest>,
    ): UpdateAnOrganizationRequest {
        return new UpdateAnOrganizationRequest({...this.serialize(), ...props});
    }
}
