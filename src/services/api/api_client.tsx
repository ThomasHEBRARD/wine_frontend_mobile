import axios from 'axios';
import logger from 'services/logger/logger';
import Store from 'services/reducers/store';

export const getHeaders = () => {
    const header: { [k: string]: string } = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    const userToken = Store.getState().userToken;

    if (userToken) {
        header.Authorization = `Bearer ${userToken}`;
    }
    return header;
};

export class CanceledRequestError extends Error {}

class ApiClient {
    private baseURL?: string;
    protected paths: { [k: string]: string };

    public constructor() {
        // this.baseURL = process.env.BASE_BACKEND_URL;
        this.baseURL = 'http://127.0.0.1:8000';
        this.paths = {};

        axios.interceptors.response.use(
            (response: any) => response,
            (error: { response: { status: number } }) => {
                if (error.response) {
                    if (error.response.status === 403) {
                        logger.warn('An unexpected 403 error occured. Logging out...');
                    }
                }
                return Promise.reject(error);
            }
        );
    }

    public url(key: string) {
        return `${this.baseURL}${this.paths[key]}`;
    }
}

export default ApiClient;
