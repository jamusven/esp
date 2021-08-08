// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IFilter {
    enabled: boolean;
    id: number;
    last_updated: string;
    name: string;
    rules_count: number;
    url: string;
}

export default class Filter {
    readonly _enabled: boolean;

    get enabled(): boolean {
        return this._enabled;
    }

    static enabledValidate(enabled: boolean): boolean {
        return typeof enabled === 'boolean';
    }

    readonly _id: number;

    /**
     * Description: undefined
     * Example: 1234
     */
    get id(): number {
        return this._id;
    }

    static idValidate(id: number): boolean {
        return typeof id === 'number';
    }

    readonly _last_updated: string;

    /**
     * Description: undefined
     * Example: 2018-10-30T12:18:57+03:00
     */
    get lastUpdated(): string {
        return this._last_updated;
    }

    static lastUpdatedValidate(lastUpdated: string): boolean {
        return typeof lastUpdated === 'string' && !!lastUpdated.trim();
    }

    readonly _name: string;

    /**
     * Description: undefined
     * Example: Gosh Simplified Domain Names filter
     */
    get name(): string {
        return this._name;
    }

    static nameValidate(name: string): boolean {
        return typeof name === 'string' && !!name.trim();
    }

    readonly _rules_count: number;

    /**
     * Description: undefined
     * Example: 5912
     */
    get rulesCount(): number {
        return this._rules_count;
    }

    static rulesCountValidate(rulesCount: number): boolean {
        return typeof rulesCount === 'number';
    }

    readonly _url: string;

    /**
     * Description: undefined
     * Example: https://adguardteam.github.io/GoshSDNSFilter/Filters/filter.txt
     *
     */
    get url(): string {
        return this._url;
    }

    static urlValidate(url: string): boolean {
        return typeof url === 'string' && !!url.trim();
    }

    constructor(props: IFilter) {
        this._enabled = props.enabled;
        this._id = props.id;
        this._last_updated = props.last_updated.trim();
        this._name = props.name.trim();
        this._rules_count = props.rules_count;
        this._url = props.url.trim();
    }

    serialize(): IFilter {
        const data: IFilter = {
            enabled: this._enabled,
            id: this._id,
            last_updated: this._last_updated,
            name: this._name,
            rules_count: this._rules_count,
            url: this._url,
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            enabled: typeof this._enabled === 'boolean',
            id: typeof this._id === 'number',
            last_updated: typeof this._last_updated === 'string' && !this._last_updated ? true : this._last_updated,
            name: typeof this._name === 'string' && !this._name ? true : this._name,
            rules_count: typeof this._rules_count === 'number',
            url: typeof this._url === 'string' && !this._url ? true : this._url,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IFilter>): Filter {
        return new Filter({ ...this.serialize(), ...props });
    }
}
