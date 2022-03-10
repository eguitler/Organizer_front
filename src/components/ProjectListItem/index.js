import PropTypes from 'prop-types';
import { PRIORITIES } from '../../config/constants';
import { useDeleteProject, useEditProject } from '../../hooks/projects';
import Button from '../Button';
import {
  Container,
  Code,
  Main,
} from './styles';

const ProjectListItem = ({
  id,
  title,
  description,
  code,
  priority,
  createdAt,
  tasks,
}) => {

  const {
    editProject,
    error: editError,
    isLoading: editLoading,
  } = useEditProject();

  const {
    deleteProject,
    error: deleteError,
    isLoading: deleteLoading,
  } = useDeleteProject();

  const handleAddTask = () => {
    // editProject({ id });
  };

  const handleEditProject = () => {
    editProject({ id });
  };

  const handleDeleteProject = () => {
    deleteProject({ id });
  };

  return (
    <Container>
      <Main>
        <h3>{title}</h3>
        <p>{description}</p>
      </Main>
      <Code>{code}</Code>
      <p>
        {PRIORITIES.find((p) => p.value === priority).icon}
      </p>
      {/* <p>
        created at:
        {' '}
        {createdAt}
      </p> */}
      <p>
        {tasks.length}
      </p>
      <Button onClick={handleAddTask}>
        Add Task
      </Button>
      <Button onClick={handleEditProject}>
        Edit
      </Button>
      <Button onClick={handleDeleteProject}>
        Delete
      </Button>
    </Container>
  );
};

export default ProjectListItem;

ProjectListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
