// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IListOrganizationsInAnApplicationResponse {
    role_organization_assignments: any[];
}

export default class ListOrganizationsInAnApplicationResponse {
    readonly _role_organization_assignments: any[];

    get roleOrganizationAssignments(): any[] {
        return this._role_organization_assignments;
    }

    static roleOrganizationAssignmentsValidate(
        roleOrganizationAssignments: any[],
    ): boolean {
        return;
    }

    constructor(props: IListOrganizationsInAnApplicationResponse) {
        this._role_organization_assignments =
            props.role_organization_assignments;
    }

    serialize(): IListOrganizationsInAnApplicationResponse {
        const data: IListOrganizationsInAnApplicationResponse = {
            role_organization_assignments: this._role_organization_assignments,
        };
        return data;
    }

    validate(): string[] {
        const validate = {};
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(
        props: Partial<IListOrganizationsInAnApplicationResponse>,
    ): ListOrganizationsInAnApplicationResponse {
        return new ListOrganizationsInAnApplicationResponse({
            ...this.serialize(),
            ...props,
        });
    }
}