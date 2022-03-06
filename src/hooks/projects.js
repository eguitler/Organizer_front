import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { API_URL } from '../config/constants';

const QUERY_KEY = 'projects';

export function useGetAllProjects() {
  const {
    data: projects,
    error,
    isLoading,
  } = useQuery(
    QUERY_KEY,
    () => axios.get(`${API_URL}/projects`)
      .then(({ data: resData }) => resData),
  );

  return { projects, error, isLoading };
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const create = ({ title, description }) => {
    axios.post(
      `${API_URL}/projects/create`,
      { title, description },
    );
  };

  const {
    mutate: createProject,
    error,
    isLoading,
  } = useMutation(create, {
    onSuccess: () => invalidateQueries(),
  });

  return { createProject, error, isLoading };
}

export function useEditProject() {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const edit = ({ id, title, description }) => {
    axios.put(
      `${API_URL}/projects/edit`,
      { id, title, description },
    );
  };

  const {
    mutate: editProject,
    error,
    isLoading,
  } = useMutation(edit, {
    onSuccess: () => invalidateQueries(),
  });

  return { editProject, error, isLoading };
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const deletePr = ({ id }) => {
    axios.delete(`${API_URL}/projects/delete?id=${id}`);
  };

  const {
    mutate: deleteProject,
    error,
    isLoading,
  } = useMutation(deletePr, {
    onSuccess: () => invalidateQueries(),
  });

  return { deleteProject, error, isLoading };
}
