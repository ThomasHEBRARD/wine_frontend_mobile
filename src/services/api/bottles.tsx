import ApiClient, { getHeaders } from './api_client';
import axios, { CancelToken } from 'axios';

class Bottles extends ApiClient {
    public constructor() {
        super();
        this.paths = {
            bottles: '/bottles/',
        };
    }
    
    // TODO Put BottleProps
    public getBottles = async (cancelToken?: CancelToken): Promise<any[]> => {
        const response = await axios.get(this.url('bottles'), {
            headers: await getHeaders(),
            cancelToken,
        });

        return response.data.results;
    };
}

const bottle = new Bottles();

export default bottle;
