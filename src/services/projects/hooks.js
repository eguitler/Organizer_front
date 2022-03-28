import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import {
  createProject,
  deleteProject,
  editProject,
  getProjectById,
  getProjects,
} from './api';


const QUERY_KEY = ['projects'];


export function useProjects() {
  const {
    data: projects,
    ...rest
  } = useQuery(QUERY_KEY, getProjects, { staleTime: 0 });

  return { projects, ...rest };
}


export function useGetProject(id) {
  const {
    data: project,
    ...rest
  } = useQuery(
    [...QUERY_KEY, id],
    () => getProjectById(id),
  );

  return { project, ...rest };
}


export function useCreateProject() {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const create = (pr) => createProject({
    title: pr.title,
    description: pr.description,
  });

  const { mutate, ...rest } = useMutation(
    create,
    {
      onSuccess: ({ data }) => {
        queryClient.setQueryData(
          QUERY_KEY,
          (projects) => projects.concat(data),
        );
        invalidateQueries();
      },
    },
  );

  return { createProject: mutate, ...rest };
}


export function useEditProject() {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const edit = (pr) => editProject({
    id: pr.id,
    title: pr.title,
    description: pr.description,
  });

  const { mutate, ...rest } = useMutation(
    edit,
    { onSuccess: () => invalidateQueries() },
  );

  return { editProject: mutate, ...rest };
}


export function useDeleteProject() {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const deletePr = (id) => deleteProject(id);

  const { mutate, ...rest } = useMutation(
    deletePr,
    { onSuccess: () => invalidateQueries() },

  );

  return { deleteProject: mutate, ...rest };
}
