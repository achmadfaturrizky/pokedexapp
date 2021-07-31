import axios from 'axios';

let URL = 'https://pokeapi.co/api/v2/';

export const api = axios.create({
  baseURL: URL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

api.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error),
);
