import axios from 'axios';

// Validate environment variables
const validateEnvironment = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  
  if (!apiUrl) {
    throw new Error(
      'Missing required environment variable: VITE_API_URL\n' +
      'Please create a .env file in the frontend directory with:\n' +
      'VITE_API_URL=http://localhost:5000'
    );
  }
  
  // Validate URL format
  try {
    new URL(apiUrl);
  } catch (error) {
    throw new Error(
      `Invalid VITE_API_URL format: ${apiUrl}\n` +
      'Please provide a valid URL (e.g., http://localhost:5000)'
    );
  }
  
  return apiUrl;
};

// Validate environment on module load
const API_URL = validateEnvironment();

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor - Add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
