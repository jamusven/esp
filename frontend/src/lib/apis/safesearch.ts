// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export default class SafesearchApi {
    static async safesearchDisable(): Promise<number | Error> {
        return await fetch(`/api/v1/safesearch/disable`, {
            method: 'POST',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async safesearchEnable(): Promise<number | Error> {
        return await fetch(`/api/v1/safesearch/enable`, {
            method: 'POST',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async safesearchStatus(): Promise<any | Error> {
        return await fetch(`/api/v1/safesearch/status`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }
}
