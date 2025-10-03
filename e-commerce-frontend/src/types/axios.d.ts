import 'axios';

declare module 'axios' {
  export interface AxiosResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
  }
  
  export interface AxiosError<T = any> extends Error {
    config: any;
    code?: string;
    request?: any;
    response?: AxiosResponse<T>;
    isAxiosError: boolean;
  }
  
  export interface InternalAxiosRequestConfig {
    headers?: any;
    [key: string]: any;
  }

  export interface AxiosXHRConfig {
    headers?: any;
    [key: string]: any;
  }

}