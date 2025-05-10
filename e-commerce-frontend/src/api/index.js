import axiosInstance from "./axios";

export const get = async (url) => {
    const response = await axiosInstance.get(url);
    return response.details;
}

export const post = async (url, data) => {
    const response = await axiosInstance.post(url, data);
    return response;
}

export const put = async (url, data) => {
    const response = await axiosInstance.put(url, data);
    return response;
}

export const del = async (url) => {
    const response = await axiosInstance.delete(url);
    return response;
}