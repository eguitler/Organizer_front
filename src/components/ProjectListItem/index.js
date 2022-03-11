import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PRIORITIES } from '../../config/constants';
import { useDeleteProject, useEditProject } from '../../hooks/projects';
import Button from '../Button';
import {
  Container,
  Code,
  Main,
  Title,
} from './styles';

const ProjectListItem = ({
  id,
  title,
  description,
  code,
  priority,
  tasks,
  onEdit,
  onDelete,
  onAddTask,
}) => {

  const prior = PRIORITIES.find((p) => p.value === priority).icon;

  return (
    <Container>
      <Main>
        <Title to={`/projects/${id}`}>
          <h3>{title}</h3>
        </Title>
        {/* <p>{description}</p> */}
      </Main>
      <Code>{code}</Code>
      <p>{prior}</p>
      <p>{tasks.length}</p>
      <Button onClick={onAddTask}>
        Add Task
      </Button>
      <Button onClick={onEdit}>
        Edit
      </Button>
      <Button onClick={onDelete}>
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
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddTask: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
