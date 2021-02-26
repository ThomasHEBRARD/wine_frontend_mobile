import ApiClient, { getHeaders } from './api_client';
import axios, { CancelToken } from 'axios';
import { DataBottleProps } from 'services/type/fetch';
import { RemovedBottlesProps } from 'services/reducers/removedBottles';
import { BottleFilters } from 'services/type/bottle';

class Bottles extends ApiClient {
    public constructor() {
        super();
        this.paths = {
            bottles: '/bottles/',
            removeBottles: '/bottles/remove_bottles/',
            searchBottleForAdding: '/bottle_collection/',
        };
    }

    // TODO Put BottleProps
    public getBottles = async (
        params: { search: string },
        cancelToken?: CancelToken
    ): Promise<DataBottleProps> => {
        const response = await axios.get(this.url('bottles'), {
            params,
            headers: getHeaders(),
            cancelToken,
        });

        return response.data;
    };

    public removeBottles = async (
        params: RemovedBottlesProps[],
        cancelToken?: CancelToken
    ): Promise<DataBottleProps> => {
        const response = await axios.post(this.url('removeBottles'), params, {
            headers: getHeaders(),
            cancelToken,
        });

        return response.data;
    };

    public searchBottleForAdding = async (
        params: BottleFilters | { search: string | number } | undefined,
        cancelToken?: CancelToken
    ): Promise<DataBottleProps> => {
        const response = await axios.get(this.url('searchBottleForAdding'), {
            params,
            headers: getHeaders(),
            cancelToken,
        });

        return response.data;
    };
}

const bottle = new Bottles();

export default bottle;
