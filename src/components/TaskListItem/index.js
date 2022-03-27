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
  tasksStatus,
  onEdit,
  onDelete,
  onStatusEdit,
}) => {

  const {
    id,
    title,
    status,
    description,
    priority,
    code,
  } = data;

  const prior = PRIORITIES.find((p) => p.value === priority).icon;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log('asd >>> ', `${name} --> ${value}`);
    onStatusEdit(value);
  };

  return (
    <Container>
      <p>{code || '-'}</p>
      <Main>
        <Title to={`/projects/${id}`}>
          <h3>{title}</h3>
        </Title>
      </Main>
      <span>{description}</span>
      <select name='status' style={{ color: status.color }} onChange={handleChange} value={status.name}>
        {tasksStatus.map((st) => (
          <option value={st.name}>{st.name}</option>
        ))}
      </select>
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
