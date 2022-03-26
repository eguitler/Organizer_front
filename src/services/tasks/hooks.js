import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import {
  createTasks,
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
        invalidateQueries();
      },
    },
  );

  return { createTask: mutate, ...rest };
}
