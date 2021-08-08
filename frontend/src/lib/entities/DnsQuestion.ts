// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IDnsQuestion {
    class?: string;
    name?: string;
    type?: string;
    unicode_name?: string;
}

export default class DnsQuestion {
    readonly _class: string | undefined;

    /**
     * Description: undefined
     * Example: IN
     */
    get class(): string | undefined {
        return this._class;
    }

    readonly _name: string | undefined;

    /**
     * Description: undefined
     * Example: xn--d1abbgf6aiiy.xn--p1ai
     */
    get name(): string | undefined {
        return this._name;
    }

    readonly _type: string | undefined;

    /**
     * Description: undefined
     * Example: A
     */
    get type(): string | undefined {
        return this._type;
    }

    readonly _unicode_name: string | undefined;

    /**
     * Description: undefined
     * Example: президент.рф
     */
    get unicodeName(): string | undefined {
        return this._unicode_name;
    }

    constructor(props: IDnsQuestion) {
        if (typeof props.class === 'string') {
            this._class = props.class.trim();
        }
        if (typeof props.name === 'string') {
            this._name = props.name.trim();
        }
        if (typeof props.type === 'string') {
            this._type = props.type.trim();
        }
        if (typeof props.unicode_name === 'string') {
            this._unicode_name = props.unicode_name.trim();
        }
    }

    serialize(): IDnsQuestion {
        const data: IDnsQuestion = {
        };
        if (typeof this._class !== 'undefined') {
            data.class = this._class;
        }
        if (typeof this._name !== 'undefined') {
            data.name = this._name;
        }
        if (typeof this._type !== 'undefined') {
            data.type = this._type;
        }
        if (typeof this._unicode_name !== 'undefined') {
            data.unicode_name = this._unicode_name;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            class: !this._class ? true : typeof this._class === 'string' && !this._class ? true : this._class,
            name: !this._name ? true : typeof this._name === 'string' && !this._name ? true : this._name,
            unicode_name: !this._unicode_name ? true : typeof this._unicode_name === 'string' && !this._unicode_name ? true : this._unicode_name,
            type: !this._type ? true : typeof this._type === 'string' && !this._type ? true : this._type,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IDnsQuestion>): DnsQuestion {
        return new DnsQuestion({ ...this.serialize(), ...props });
    }
}
