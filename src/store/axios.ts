import axios from 'axios';
import { AppDispatch } from 'store';
import {
  setResource,
  overwriteResource,
  updateResource,
} from 'store/actions/resources';
import { IAxiosInstance, AxiosRes, IAxiosReq } from 'utils/types/axios';

const instance: IAxiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

export const applyInterceptors = (dispatch: AppDispatch) => {
  instance.interceptors.request.use(
    // @ts-ignore
    async (config: IAxiosReq) => {
      if (config.headers) {
        config.resourceName = config.headers.resourceName;
        config.overwrite = config.headers.overwrite;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );

  instance.interceptors.response.use((response) => {
    const { config, data } = response as AxiosRes;

    if (!config.resourceName) {
      return response;
    }

    if (config.overwrite) {
      dispatch(overwriteResource(config.resourceName, data));
    } else if (config.method === 'patch') {
      dispatch(updateResource(config.resourceName, { id: data.id, data }));
    } else {
      dispatch(setResource(config.resourceName, data));
    }

    return response;
  });
};

export default instance;
