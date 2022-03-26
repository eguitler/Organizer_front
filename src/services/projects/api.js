import axios from 'axios';
import { API_URL } from '../../config/constants';

export const getProjects = async () => {
  const url = `${API_URL}/projects`;
  const { data } = await axios.get(url);
  return data;
};

export const getProjectById = async (code) => {
  const url = `${API_URL}/projects/${code}`;
  const { data } = await axios.get(url);
  return data;
};

export const createProject = async (project) => {
  const url = `${API_URL}/projects/create`;
  const { data } = await axios.post(url, project);
  return data;
};

export const editProject = async ({ code, ...rest }) => {
  const url = `${API_URL}/projects/${code}/edit`;
  const { data } = await axios.put(url, rest);
  return data;
};

export const deleteProject = async (code) => {
  const url = `${API_URL}/projects/${code}/delete`;
  const { data } = await axios.delete(url);
  return data;
};
