import api from './api';

export const departmentService = {
  getAll: async () => {
    const response = await api.get('/api/departments');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/api/departments/${id}`);
    return response.data;
  },

  create: async (departmentData) => {
    const response = await api.post('/api/departments', departmentData);
    return response.data;
  },

  update: async (id, departmentData) => {
    const response = await api.put(`/api/departments/${id}`, departmentData);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/api/departments/${id}`);
    return response.data;
  }
};

export default departmentService;
