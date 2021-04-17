import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTask = async value => httpClient.post('/tasks/', value);
export const getTasks = () => httpClient.get('/tasks/');
