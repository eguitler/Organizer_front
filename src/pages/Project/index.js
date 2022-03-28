import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal } from '../../components';
import TaskListItem from '../../components/TaskListItem';
import { INPUT_STYLES, PRIORITIES } from '../../config/constants';
import { useGetProject } from '../../services/projects';
import {
  useCreateTask,
  useDeleteTask,
  useEditTask,
  useTasks,
} from '../../services/tasks';
import { Container, TasksHeader } from './styles';

const Project = () => {

  const [state, setState] = useState({
    title: '',
    description: '',
    priority: '',
    filter: '',
    isCreate: false,
  });

  const { id: projectId } = useParams();
  const newTaskModalRef = useRef();

  const { project, isLoading, isError } = useGetProject(projectId);
  const {
    tasks = [],
    isLoading: isLoadingTasks,
  } = useTasks(projectId);

  const {
    createTask,
    isLoading: isLoadingCreateTask,
  } = useCreateTask(projectId);

  const {
    editTask,
    isLoading: isLoadinEditTask,
  } = useEditTask(projectId);

  const {
    deleteTask,
    isLoading: isLoadingDeleteTask,
  } = useDeleteTask(projectId);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateTask = () => {
    const task = {
      title: state.title,
      description: state.description,
      priority: parseInt(state.priority),
      projectId: project.id,
    };
    createTask(task);
  };

  const handleEditTask = () => {
    const task = {
      id: state.id,
      title: state.title,
      description: state.description,
      priority: parseInt(state.priority),
    };
    editTask(task);
  };

  const handleEditStatusTask = (id, status) => {
    editTask({ id, status });
  };

  const handleEdit = (task) => {
    setState((prev) => ({
      ...prev,
      id: task.id,
      title: task.title,
      description: task.description,
      priority: task.priority,
      isCreate: false,
    }));

    newTaskModalRef.current.open();
  };

  if (isError) {
    return (
      <span>There was an error...</span>
    );
  }

  if (isLoading) {
    return (
      <span>Loading...</span>
    );
  }

  return (
    <>
      <Container>
        {/* <Link to='/projects'>Atras</Link> */}
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <TasksHeader>
          <h3>{`Tasks (${tasks.length})`}</h3>
          <button
            style={{ color: 'black' }}
            onClick={() => setState((prev) => ({ ...prev, filter: '' }))}
          >
            ALL
          </button>
          {project.tasksStatus.map((st) => (
            <button
              key={st.name}
              style={{ color: st.color }}
              onClick={() => setState((prev) => ({ ...prev, filter: st.name }))}
            >
              {st.name}
            </button>
          ))}
          <Button
            onClick={() => {
              setState((prev) => ({ ...prev, isCreate: true }));
              newTaskModalRef.current.open();
            }}
          >
            New task
          </Button>
        </TasksHeader>
        {
          isLoadingTasks
            ? <p>loading tasks</p>
            : tasks
              .filter((task) => {
                if (state.filter === '') return task;
                return task.status.name === state.filter;
              })
              .map((task) => (
                <TaskListItem
                  key={task.id}
                  onEdit={() => handleEdit(task)}
                  onDelete={() => deleteTask(task.id)}
                  onStatusEdit={(status) => handleEditStatusTask(task.id, status)}
                  data={task}
                  tasksStatus={project.tasksStatus}
                />
              ))
        }
      </Container>


      <Modal ref={newTaskModalRef}>
        <input
          style={INPUT_STYLES}
          name='title'
          placeholder='Title'
          value={state.title}
          onChange={handleInputChange}
        />
        <input
          style={INPUT_STYLES}
          name='description'
          placeholder='Description'
          value={state.description}
          onChange={handleInputChange}
        />
        <select
          name='priority'
          value={state.priority}
          onChange={handleInputChange}
          style={INPUT_STYLES}
        >
          <option default>Choose priority</option>
          {PRIORITIES.map((prior) => (
            <option
              key={prior.value}
              value={prior.value}
            >
              {prior.label}
            </option>

          ))}
        </select>
        <Button
          onClick={() => newTaskModalRef.current.close()}
          variant='outlined'
        >
          Cancel
        </Button>
        <Button onClick={state.isCreate ? handleCreateTask : handleEditTask}>
          {state.isCreate ? 'Create' : 'Save'}
        </Button>
      </Modal>
    </>
  );
};

export default Project;
