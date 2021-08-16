import IotAgent, {IIotAgent} from './IotAgent';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IListOfIotAgentsResponse {
    iots: IIotAgent[];
}

export default class ListOfIotAgentsResponse {
    readonly _iots: IotAgent[];

    get iots(): IotAgent[] {
        return this._iots;
    }

    constructor(props: IListOfIotAgentsResponse) {
        this._iots = props.iots.map((p) => new IotAgent(p));
    }

    serialize(): IListOfIotAgentsResponse {
        const data: IListOfIotAgentsResponse = {
            iots: this._iots.map((p) => p.serialize()),
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            iots: this._iots.reduce(
                (result, p) => result && p.validate().length === 0,
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

    update(props: Partial<IListOfIotAgentsResponse>): ListOfIotAgentsResponse {
        return new ListOfIotAgentsResponse({...this.serialize(), ...props});
    }
}
