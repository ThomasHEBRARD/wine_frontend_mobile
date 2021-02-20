import ApiClient, { getHeaders } from './api_client';
import axios, { CancelToken } from 'axios';

class MyCellar extends ApiClient {
    public constructor() {
        super();
        this.paths = {
            myCellarName: 'mycellar',
        };
    }

    public getMyCellarName = async (
        cancelToken?: CancelToken
    ): Promise<{ name: string; code: string }[]> => {
        const response = await axios.get(this.url('myCellarName'), {
            headers: getHeaders(),
            cancelToken,
        });
        return response.data;
    };
}

const cellar = new MyCellar();

export default cellar;
