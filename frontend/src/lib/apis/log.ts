import qs from 'qs';
import QueryLog, { IQueryLog } from 'Entities/QueryLog';
import QueryLogConfig, { IQueryLogConfig } from 'Entities/QueryLogConfig';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export default class LogApi {
    static async queryLog(older_than?: string, offset?: number, limit?: number, search?: string, response_status?: string): Promise<IQueryLog | Error> {
        const queryParams = {
            older_than: older_than,
            offset: offset,
            limit: limit,
            search: search,
            response_status: response_status,
        }
        return await fetch(`/api/v1/querylog?${qs.stringify(queryParams, { arrayFormat: 'comma' })}`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async queryLogConfig(querylogconfig: IQueryLogConfig): Promise<number | string[] | Error> {
        const haveError: string[] = [];
        const querylogconfigValid = new QueryLogConfig(querylogconfig);
        haveError.push(...querylogconfigValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/api/v1/querylog_config`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(querylogconfigValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async queryLogInfo(): Promise<IQueryLogConfig | Error> {
        return await fetch(`/api/v1/querylog_info`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async querylogClear(): Promise<number | Error> {
        return await fetch(`/api/v1/querylog_clear`, {
            method: 'POST',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }
}
