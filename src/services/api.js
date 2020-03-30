import axios from 'axios';

import { getToken } from './auth';

// Remove the link, use variable from .env
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.github.com/users',
  headers: {
    Accept: 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
