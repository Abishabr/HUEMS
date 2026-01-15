import api from './api';

export const leaveService = {
  getAll: async () => {
    const response = await api.get('/api/leave-requests');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/api/leave-requests/${id}`);
    return response.data;
  },

  create: async (leaveData) => {
    const response = await api.post('/api/leave-requests', leaveData);
    return response.data;
  },

  update: async (id, leaveData) => {
    const response = await api.put(`/api/leave-requests/${id}`, leaveData);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/api/leave-requests/${id}`);
    return response.data;
  }
};

export default leaveService;
