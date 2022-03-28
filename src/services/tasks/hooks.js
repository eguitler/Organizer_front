import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import {
  createTasks,
  deleteTask,
  editTask,
  getTasks,
} from './api';


const QUERY_KEY = ['tasks'];
const QUERY_KEY2 = ['task'];


export function useTasks(projectId) {

  // const get = () => {
  //   getTasks({ id });
  // };
  // const queries = QUERY_KEY.concat(id);

  // if (id) {
  //   queries = new Set([QUERY_KEY, id]);
  // }

  const {
    data: tasks,
    ...rest
  } = useQuery([...QUERY_KEY, projectId], () => getTasks(projectId));

  return { tasks, ...rest };
}


export function useCreateTask(projectId) {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const create = (task) => createTasks({
    title: task.title,
    description: task.description,
    priority: task.priority,
    projectId: task.projectId,
  });

  const { mutate, ...rest } = useMutation(
    create,
    {
      onSuccess: ({ data }) => {
        queryClient.setQueryData(
          [...QUERY_KEY, projectId],
          (tasks) => tasks.concat(data),
        );
        queryClient.refetchQueries('projects');
        invalidateQueries();
      },
    },
  );

  return { createTask: mutate, ...rest };
}


export function useEditTask(projectId) {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries([...QUERY_KEY, projectId]);

  const edit = (task) => editTask({
    id: task.id,
    title: task.title,
    description: task.description,
    priority: task.priority,
    status: task.status,
  });

  const { mutate, ...rest } = useMutation(
    edit,
    { onSuccess: () => invalidateQueries() },
  );

  return { editTask: mutate, ...rest };
}


export function useDeleteTask(projectId) {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries([...QUERY_KEY, projectId]);

  const deletePr = (id) => deleteTask(id);

  const { mutate, ...rest } = useMutation(
    deletePr,
    {
      onSuccess: () => {
        invalidateQueries();
        queryClient.refetchQueries('projects');
      },
    },

  );

  return { deleteTask: mutate, ...rest };
}
