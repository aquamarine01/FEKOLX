import axios from 'axios';
import { AppDispatch } from '.';

const instance = axios.create({
  baseURL: process.env.API_URL,
});

export const applyInterceptors = (dispatch: AppDispatch) => {
  instance.interceptors.request.use((config) => {});
};

export default instance;
