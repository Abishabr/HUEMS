import api from './api';

export const reportService = {
  getDashboardStats: async () => {
    const response = await api.get('/api/reports/dashboard-stats');
    return response.data;
  },

  getDepartmentDistribution: async () => {
    const response = await api.get('/api/reports/department-distribution');
    return response.data;
  },

  getLeaveSummary: async () => {
    const response = await api.get('/api/reports/leave-summary');
    return response.data;
  }
};

export default reportService;
