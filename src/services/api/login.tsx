import ApiClient, { getHeaders } from './api_client';
import axios, { CancelToken } from 'axios';

class Login extends ApiClient {
    public constructor() {
        super();
        this.paths = {
            login: '/login/',
        };
    }

    public login = async (
        email: string,
        password: string,
        cancelToken?: CancelToken
    ): Promise<any> => {
        console.log('coucou')
        const response = await axios.post(
            this.url('login'),
            {
                email,
                password,
            },
            { headers: getHeaders(), cancelToken }
        );
        console.log(response)
        return response.data;
    };
}

const loginClient = new Login();

export default loginClient;
