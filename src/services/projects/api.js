import axios from 'axios';
import { API_URL } from '../../config/constants';

export const getProjects = async () => {
  const url = `${API_URL}/projects`;
  const { data } = await axios.get(url);
  return data;
};

export const getProjectById = async (id) => {
  const url = `${API_URL}/projects/${id}`;
  const { data } = await axios.get(url);
  return data;
};

export const createProject = async (project) => {
  const url = `${API_URL}/projects/create`;
  const { data } = await axios.post(url, project);
  return data;
};

export const editProject = async (project) => {
  const url = `${API_URL}/projects/edit`;
  const { data } = await axios.put(url, project);
  return data;
};

export const deleteProject = async (id) => {
  const url = `${API_URL}/projects/delete?id=${id}`;
  const { data } = await axios.delete(url);
  return data;
};
