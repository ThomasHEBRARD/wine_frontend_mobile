import ApiClient, { getHeaders } from './api_client';
import axios, { CancelToken } from 'axios';

class Login extends ApiClient {
    public constructor() {
        super();
        this.paths = {
            login: '/login/',
            signUp: '/register/',
            logout: '/logout/',
        };
    }

    public login = async (
        email: string,
        password: string,
        cancelToken?: CancelToken
    ): Promise<{ token: string }> => {
        const response = await axios.post(
            this.url('login'),
            {
                email,
                password,
            },
            { cancelToken }
        );
        return response.data;
    };

    public logout = async () => {
        const response = await axios.post(this.url('logout'), null, {
            headers: await getHeaders(),
        });
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
            headers: await getHeaders(),
            cancelToken,
        });
        return response.data;
    };
}

const loginClient = new Login();

export default loginClient;
