import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
});

export const testBackend = async () => {
  const response = await api.get('/health');
  return response.data;
};

export const testDatabase = async () => {
  const response = await api.get('/db-test');
  return response.data;
};