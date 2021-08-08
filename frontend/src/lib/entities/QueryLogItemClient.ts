import QueryLogItemClientWhois, { IQueryLogItemClientWhois } from './QueryLogItemClientWhois';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IQueryLogItemClient {
    disallowed: boolean;
    disallowed_rule: string;
    name: string;
    whois: IQueryLogItemClientWhois;
}

export default class QueryLogItemClient {
    readonly _disallowed: boolean;

    /** */
    get disallowed(): boolean {
        return this._disallowed;
    }

    static disallowedValidate(disallowed: boolean): boolean {
        return typeof disallowed === 'boolean';
    }

    readonly _disallowed_rule: string;

    /** */
    get disallowedRule(): string {
        return this._disallowed_rule;
    }

    static disallowedRuleValidate(disallowedRule: string): boolean {
        return typeof disallowedRule === 'string' && !!disallowedRule.trim();
    }

    readonly _name: string;

    /** */
    get name(): string {
        return this._name;
    }

    static nameValidate(name: string): boolean {
        return typeof name === 'string' && !!name.trim();
    }

    readonly _whois: QueryLogItemClientWhois;

    get whois(): QueryLogItemClientWhois {
        return this._whois;
    }

    constructor(props: IQueryLogItemClient) {
        this._disallowed = props.disallowed;
        this._disallowed_rule = props.disallowed_rule.trim();
        this._name = props.name.trim();
        this._whois = new QueryLogItemClientWhois(props.whois);
    }

    serialize(): IQueryLogItemClient {
        const data: IQueryLogItemClient = {
            disallowed: this._disallowed,
            disallowed_rule: this._disallowed_rule,
            name: this._name,
            whois: this._whois.serialize(),
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            disallowed: typeof this._disallowed === 'boolean',
            disallowed_rule: typeof this._disallowed_rule === 'string' && !this._disallowed_rule ? true : this._disallowed_rule,
            name: typeof this._name === 'string' && !this._name ? true : this._name,
            whois: this._whois.validate().length === 0,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IQueryLogItemClient>): QueryLogItemClient {
        return new QueryLogItemClient({ ...this.serialize(), ...props });
    }
}
