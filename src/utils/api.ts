// src/utils/api.ts

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://lms-server-915k.onrender.com/api',
});

export const getFileUrl = (file: File): string => {
  return URL.createObjectURL(file);
};

export default api;
