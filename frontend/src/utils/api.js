import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (credentials) => api.post('/users/login', credentials);
export const register = (userData) => api.post('/users/register', userData);
export const getProfile = () => api.get('/users/profile');
export const createItinerary = (itineraryData) => api.post('/itineraries', itineraryData);
export const getItineraries = () => api.get('/itineraries');
export const getItinerary = (id) => api.get(`/itineraries/${id}`);
export const updateItinerary = (id, itineraryData) => api.put(`/itineraries/${id}`, itineraryData);
export const deleteItinerary = (id) => api.delete(`/itineraries/${id}`);

export default api;