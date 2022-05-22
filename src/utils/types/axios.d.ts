import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosRequestHeaders,
} from 'axios';
import { ResourceName, Resources } from 'utils/interface';

interface IAxiosRequestHeaders extends AxiosRequestHeaders {
  Authorization: string;
  resourceName: ResourceName;
  // @ts-ignore
  overwrite: boolean;
}

export interface IAxiosInstance extends AxiosInstance {
  config?: {
    headers?: IAxiosRequestHeaders;
  };
}

export interface IAxiosReq extends AxiosRequestConfig {
  headers?: IAxiosRequestHeaders & {
    Authorization?: string;
    resourceName?: ResourceName;
  };
  resourceName?: ResourceName;
  overwrite?: boolean;
}

interface IAxiosRequestConfig extends AxiosRequestConfig {
  resourceName: ResourceName;
  overwrite: boolean;
}

export interface AxiosRes extends AxiosResponse {
  config: IAxiosRequestConfig;
}

export type AxiosResProps<T extends ResourceName> = AxiosResponse &
  Resources[T];
