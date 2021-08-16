import IotAgent, {IIotAgent} from './IotAgent';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IReadIotAgentDetailsResponse {
    iot: IIotAgent;
}

export default class ReadIotAgentDetailsResponse {
    readonly _iot: IotAgent;

    get iot(): IotAgent {
        return this._iot;
    }

    constructor(props: IReadIotAgentDetailsResponse) {
        this._iot = new IotAgent(props.iot);
    }

    serialize(): IReadIotAgentDetailsResponse {
        const data: IReadIotAgentDetailsResponse = {
            iot: this._iot.serialize(),
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            iot: this._iot.validate().length === 0,
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
        props: Partial<IReadIotAgentDetailsResponse>,
    ): ReadIotAgentDetailsResponse {
        return new ReadIotAgentDetailsResponse({...this.serialize(), ...props});
    }
}
