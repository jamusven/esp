// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface ICheckConfigRequestInfo {
    autofix?: boolean;
    ip?: string;
    port?: number;
}

export default class CheckConfigRequestInfo {
    readonly _autofix: boolean | undefined;

    get autofix(): boolean | undefined {
        return this._autofix;
    }

    readonly _ip: string | undefined;

    /**
     * Description: undefined
     * Example: 127.0.0.1
     */
    get ip(): string | undefined {
        return this._ip;
    }

    readonly _port: number | undefined;

    /**
     * Description: undefined
     * Example: 53
     */
    get port(): number | undefined {
        return this._port;
    }

    constructor(props: ICheckConfigRequestInfo) {
        if (typeof props.autofix === 'boolean') {
            this._autofix = props.autofix;
        }
        if (typeof props.ip === 'string') {
            this._ip = props.ip.trim();
        }
        if (typeof props.port === 'number') {
            this._port = props.port;
        }
    }

    serialize(): ICheckConfigRequestInfo {
        const data: ICheckConfigRequestInfo = {
        };
        if (typeof this._autofix !== 'undefined') {
            data.autofix = this._autofix;
        }
        if (typeof this._ip !== 'undefined') {
            data.ip = this._ip;
        }
        if (typeof this._port !== 'undefined') {
            data.port = this._port;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            ip: !this._ip ? true : typeof this._ip === 'string' && !this._ip ? true : this._ip,
            port: !this._port ? true : typeof this._port === 'number',
            autofix: !this._autofix ? true : typeof this._autofix === 'boolean',
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<ICheckConfigRequestInfo>): CheckConfigRequestInfo {
        return new CheckConfigRequestInfo({ ...this.serialize(), ...props });
    }
}
