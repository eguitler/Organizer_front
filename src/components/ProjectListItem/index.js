import PropTypes from 'prop-types';
import { PRIORITIES } from '../../config/constants';
import Button from '../Button';
import {
  Code,
  Container,
  Main,
  Title,
} from './styles';

const ProjectListItem = ({
  data,
  onEdit,
  onDelete,
}) => {

  const {
    id,
    title,
    code,
    tasks,
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
      <Code>{code}</Code>
      <p>{prior}</p>
      <p>{tasks.length}</p>
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
  code: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    code: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.string),
    priority: PropTypes.number,
  }).isRequired,
};
