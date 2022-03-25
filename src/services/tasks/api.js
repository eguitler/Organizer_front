import axios from 'axios';
import { API_URL } from '../../config/constants';

export const getTasks = async (projectId = '') => {
  const url = `${API_URL}/tasks/${projectId}`;
  const { data } = await axios.get(url);
  return data;
};

// export const getProjectById = async (id) => {
//   console.log('asd >> ', id);
//   const url = `${API_URL}/projects/${id}`;
//   const { data } = await axios.get(url);
//   return data;
// };

export const createTasks = async (project) => {
  const url = `${API_URL}/tasks/create`;
  const { data } = await axios.post(url, project);
  return data;
};

// export const editProject = async (project) => {
//   const url = `${API_URL}/projects/edit`;
//   const { data } = await axios.put(url, project);
//   return data;
// };

// export const deleteProject = async (id) => {
//   const url = `${API_URL}/projects/delete?id=${id}`;
//   const { data } = await axios.delete(url);
//   return data;
// };
