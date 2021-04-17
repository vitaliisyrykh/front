import axios from 'axios';
import {BASE_URL} from '../config';

const httpClient = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const createTask = async value => httpClient.post('/tasks/', value);
export const getTasks = () => httpClient.get('/tasks/');
