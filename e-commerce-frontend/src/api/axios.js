import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000/api',
    headers: {
        "Content-Type": "application/json",
    }
});

const setupInterceptors = (auth) => {
    axiosInstance.interceptors.request.use( async (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        return Promise.reject(error);
    })
}

export default axiosInstance;
export { setupInterceptors };