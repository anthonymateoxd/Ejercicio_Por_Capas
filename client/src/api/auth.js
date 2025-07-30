import api from './axios.js';

export const getRequest = () => api.get('/user');

export const getRequestUser = id_usuario => api.get(`/user/${id_usuario}`);

export const putRequest = (user, id_usuario) =>
  api.put(`/user/${id_usuario}`, user);

export const deleteRequest = id_usuario => api.delete(`/user/${id_usuario}`);

export const addRequest = user => api.post('/user', user);
