import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.7:4000/api',
  withCredentials: true,
});

export default api;
