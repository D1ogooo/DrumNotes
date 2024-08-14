import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://drumnotes-backend-1.onrender.com',
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("@DrumNotes:token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
