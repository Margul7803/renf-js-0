import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTasks = async () => {
  try {
    const response = await apiClient.get('/tasks');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches:', error);
    throw error;
  }
};

export const createTask = async (taskData:any) => {
  try {
    const response = await apiClient.post('/tasks', taskData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la tâche:', error);
    throw error;
  }
};

export const deleteTask = async (id:any) => {
    try {
      await apiClient.delete('/tasks', {data: {id}});
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche:', error);
      throw error;
    }
  };