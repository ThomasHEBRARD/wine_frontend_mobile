import ApiClient, { getHeaders } from './api_client';
import axios, { CancelToken } from 'axios';

class User extends ApiClient {
    public constructor() {
        super();
        this.paths = {
            profile: '/user/profile/',
        };
    }

    public getProfile = async (cancelToken?: CancelToken): Promise<any> => {
        const response = await axios.get(this.url('profile'), {
            headers: getHeaders(),
            cancelToken,
        });
        return response.data;
    };
}

const user = new User();

export default user;
