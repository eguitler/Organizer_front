import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal } from '../../components';
import TaskListItem from '../../components/TaskListItem';
import { INPUT_STYLES, PRIORITIES } from '../../config/constants';
import { useGetProject } from '../../services/projects';
import { useCreateTask, useTasks } from '../../services/tasks';
import { Container, TasksHeader } from './styles';

const Project = () => {

  const [state, setState] = useState({
    title: '',
    description: '',
    priority: '',
  });

  const { code } = useParams();
  const newTaskModalRef = useRef();

  const { project, isLoading, isError } = useGetProject(code);
  const {
    tasks = [],
    isLoading: isLoadingTasks,
  } = useTasks(code);
  console.log('asd >> PR ', project);

  const {
    createTask,
    isLoading: isLoadingCreateTask,
  } = useCreateTask(code);

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
    };
    createTask(task);
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
        <h2>{`${project.title} [${project.code}]`}</h2>
        <p>{project.description}</p>

        <TasksHeader>
          <h3>Tasks</h3>
          <Button onClick={() => newTaskModalRef.current.open()}>
            New task
          </Button>
        </TasksHeader>
        {
          isLoadingTasks
            ? <p>loading tasks</p>
            : tasks.map((task) => <TaskListItem data={task} />)
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
              code={prior.value}
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
        <Button onClick={handleCreateTask}>
          Confirm
        </Button>
      </Modal>
    </>
  );
};

export default Project;
