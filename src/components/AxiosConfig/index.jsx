/* eslint-disable prettier/prettier */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gmen-admin.wii.camp/api/v1.0',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  instance.defaults.headers.common.Authorization = token;
};

export const removeAuthToken = () => {
  delete instance.defaults.headers.common.Authorization;
};

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const remove = (url) => instance.delete(url);

export default instance;
