import { _data } from "./_data";
export interface Entpoint {
    id: string;
    endpoint: string;
    path: string;
}

function Db(data: { [key: string]: Entpoint }, searchTerm: string) {
    if (searchTerm === 'entpoints')
        return Object.keys(data).map((entpoint: string) => data[entpoint])
}

async function server(data: { resource: string }) {
    return await new Promise((resolve, reject) => {
        if (data.resource === 'entpoints')
            resolve(Db(_data, data.resource));
        reject({ msg: 'invalid data' });
    });
}

export function getEntpoints(): Promise<Entpoint[]> {
    return new Promise((resolve, reject) => {
        resolve(server({ resource: 'entpoints' }).then());
    });
}