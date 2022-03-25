import PropTypes from 'prop-types';
import { PRIORITIES } from '../../config/constants';
import Button from '../Button';
import {
  Container,
  Main,
  Title,
} from './styles';

const TaskListItem = ({
  data,
  onEdit,
  onDelete,
}) => {

  const {
    id,
    title,
    description,
    priority,
  } = data;

  const prior = PRIORITIES.find((p) => p.value === priority).icon;

  return (
    <Container>
      <Main>
        <Title to={`/projects/${id}`}>
          <h3>{title}</h3>
        </Title>
      </Main>
      <span>{description}</span>
      <p>{prior}</p>
      <Button onClick={onEdit}>
        Edit
      </Button>
      <Button onClick={onDelete}>
        Delete
      </Button>
    </Container>
  );
};

export default TaskListItem;

TaskListItem.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    code: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.string),
    priority: PropTypes.number,
  }).isRequired,
};
