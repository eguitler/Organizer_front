import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import {
  createProject,
  deleteProject,
  editProject,
  getProjects,
} from '../api/projects';

const QUERY_KEY = ['projects'];

export function useProjects() {
  const {
    data: projects,
    ...rest
  } = useQuery(QUERY_KEY, getProjects);

  return { projects, ...rest };
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const create = ({
    title,
    description,
    code,
    priority,
  }) => createProject({
    title,
    description,
    code,
    priority,
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

  const edit = ({ id, title, description }) => editProject({ id, title, description });

  const { mutate, ...rest } = useMutation(
    edit,
    {
      onSuccess: () => invalidateQueries(),
    },
  );

  return { editProject: mutate, ...rest };
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const deletePr = ({ id }) => deleteProject(id);

  const { mutate, ...rest } = useMutation(
    deletePr,
    {
      onSuccess: () => invalidateQueries(),
    },
  );

  return { deleteProject: mutate, ...rest };
}
