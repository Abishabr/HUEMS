import api from './api';

// Employee service using centralized API configuration
export const employeeService = {
  // Get all employees
  getAll: async (filters = {}) => {
    const response = await api.get('/api/employees', { params: filters });
    return response.data;
  },

  // Get single employee
  getById: async (id) => {
    const response = await api.get(`/api/employees/${id}`);
    return response.data;
  },

  // Create employee
  create: async (employeeData) => {
    const response = await api.post('/api/employees', employeeData);
    return response.data;
  },

  // Update employee
  update: async (id, employeeData) => {
    const response = await api.put(`/api/employees/${id}`, employeeData);
    return response.data;
  },

  // Delete employee
  delete: async (id) => {
    const response = await api.delete(`/api/employees/${id}`);
    return response.data;
  },

  // Get statistics
  getStats: async () => {
    const response = await api.get('/api/reports/dashboard-stats');
    return response.data;
  }
};

export default employeeService;
