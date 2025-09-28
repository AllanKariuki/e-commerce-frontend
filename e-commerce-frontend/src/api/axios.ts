import axios from 'axios';
import { getConfig } from '../Config';
import type { AxiosResponse, AxiosError } from 'axios';

const { VITE_API_BASE_URL } = getConfig();
const axiosInstance = axios.create({
    baseURL: VITE_API_BASE_URL || 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    },
});

const setupInterceptors = () => {
    axiosInstance.interceptors.request.use( 
        (config: any) => {
        if (window.location.href.includes('orders')) {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }        
        return config;
    }, (error: any) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response: AxiosResponse) => {
        return response.data;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    })
}

export default axiosInstance;
export { setupInterceptors };