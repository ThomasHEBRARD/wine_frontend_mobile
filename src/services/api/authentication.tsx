import ApiClient, { getHeaders } from './api_client';
import axios, { CancelToken } from 'axios';

class Login extends ApiClient {
    public constructor() {
        super();
        this.paths = {
            login: '/login/',
            signUp: '/register/',
        };
    }

    public login = async (
        email: string,
        password: string,
        cancelToken?: CancelToken
    ): Promise<any> => {
        const response = await axios.post(
            this.url('login'),
            {
                email,
                password,
            },
            { headers: getHeaders(), cancelToken }
        );
        return response.data;
    };

    public signUp = async (
        params: {
            first_name: string;
            last_name: string;
            email: string;
            password: string;
        },
        cancelToken?: CancelToken
    ): Promise<any> => {
        const response = await axios.post(this.url('signUp'), params, {
            headers: getHeaders(),
            cancelToken,
        });
        return response.data;
    };
}

const loginClient = new Login();

export default loginClient;
