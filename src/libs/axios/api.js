import axios from 'axios';

export default function makeApi(baseURL) {
    const api = axios.create({ baseURL });

    api.defaults.headers['Content-Type'] = 'application/json';

    // Add a request interceptor
    api.interceptors.request.use(
        config => {
            return config;
        },
        async error => {
            // Do something with request error
            return Promise.reject(error);
        },
    );

    api.interceptors.response.use(
        response => response.data, // return data object
        async error => Promise.reject(error),
    );

    return api;
}
