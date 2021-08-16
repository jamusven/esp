// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IListTrustedApplicationsAssociatedToAnApplicationResponse {
    trusted_applications: string[];
}

export default class ListTrustedApplicationsAssociatedToAnApplicationResponse {
    readonly _trusted_applications: string[];

    get trustedApplications(): string[] {
        return this._trusted_applications;
    }

    static trustedApplicationsValidate(trustedApplications: string[]): boolean {
        return trustedApplications.reduce<boolean>(
            (result, p) => result && typeof p === 'string' && !!p.trim(),
            true,
        );
    }

    constructor(
        props: IListTrustedApplicationsAssociatedToAnApplicationResponse,
    ) {
        this._trusted_applications = props.trusted_applications;
    }

    serialize(): IListTrustedApplicationsAssociatedToAnApplicationResponse {
        const data: IListTrustedApplicationsAssociatedToAnApplicationResponse = {
            trusted_applications: this._trusted_applications,
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            trusted_applications: this._trusted_applications.reduce(
                (result, p) => result && typeof p === 'string',
                true,
            ),
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
        props: Partial<
            IListTrustedApplicationsAssociatedToAnApplicationResponse
        >,
    ): ListTrustedApplicationsAssociatedToAnApplicationResponse {
        return new ListTrustedApplicationsAssociatedToAnApplicationResponse({
            ...this.serialize(),
            ...props,
        });
    }
}
