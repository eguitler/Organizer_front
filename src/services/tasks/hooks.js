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


export function useTasks(projectCode) {

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
  } = useQuery([...QUERY_KEY, projectCode], () => getTasks(projectCode));

  return { tasks, ...rest };
}


export function useCreateTask(projectCode) {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries(QUERY_KEY);

  const create = (task) => createTasks({
    title: task.title,
    description: task.description,
    priority: task.priority,
    projectId: task.projectId,
    projectCode,
  });

  const { mutate, ...rest } = useMutation(
    create,
    {
      onSuccess: ({ data }) => {
        queryClient.setQueryData(
          [...QUERY_KEY, projectCode],
          (tasks) => tasks.concat(data),
        );
        queryClient.refetchQueries('projects');
        invalidateQueries();
      },
    },
  );

  return { createTask: mutate, ...rest };
}


export function useEditTask(projectCode) {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries([...QUERY_KEY, projectCode]);

  const edit = (task) => editTask({
    title: task.title,
    description: task.description,
    priority: task.priority,
    status: task.status,
    code: task.code,
  });

  const { mutate, ...rest } = useMutation(
    edit,
    { onSuccess: () => invalidateQueries() },
  );

  return { editTask: mutate, ...rest };
}


export function useDeleteTask(projectCode) {
  const queryClient = useQueryClient();
  const invalidateQueries = () => queryClient.invalidateQueries([...QUERY_KEY, projectCode]);

  const deletePr = (code) => deleteTask(code);

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
