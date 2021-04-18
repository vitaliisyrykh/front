import axios from 'axios';
import { BASE_URL } from '../config';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTask = async value => httpClient.post('/tasks/', value);
export const getTasks = () => httpClient.get('/tasks/');
export const updateTask = ({id},{values})=>httpClient.patch(`/tasks/${id}`,values);
export const deleteTask = ({ id } = {}) => httpClient.delete(`/tasks/${id}`);
