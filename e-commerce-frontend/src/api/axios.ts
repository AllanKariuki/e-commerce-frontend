import axios from 'axios';
import { getConfig } from '../Config';
import type { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

const { VITE_API_BASE_URL } = getConfig();

// No global `Content-Type` default: axios infers it per request — it sets
// `application/json` for plain-object bodies and lets the browser set
// `multipart/form-data` (with the correct boundary) for FormData uploads such
// as the visual-search image post. A hard-coded default would break multipart.
const axiosInstance = axios.create({
    baseURL: VITE_API_BASE_URL || 'http://localhost:8000/api',
    withCredentials: true,
});

// Read the persisted bearer token. There is no auth store wired up yet, so we
// read straight from localStorage under a single well-known key; once a proper
// auth slice exists this is the one place to repoint.
const TOKEN_STORAGE_KEY = 'token';

const getToken = (): string | null => {
    try {
        return localStorage.getItem(TOKEN_STORAGE_KEY);
    } catch {
        // localStorage can throw in privacy mode / blocked-cookies contexts.
        return null;
    }
};

const setupInterceptors = () => {
    axiosInstance.interceptors.request.use( 
        (config: InternalAxiosRequestConfig) => {
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

    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response.data;
        }, 
        (error: AxiosError) => {
            return Promise.reject(error);
        }
    );
}

export default axiosInstance;
export { setupInterceptors };
