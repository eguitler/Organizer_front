import PropTypes from 'prop-types';
import Button from '../Button';
import {
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
    tasks,
  } = data;

  return (
    <Container>
      <Main>
        <Title to={`/projects/${id}`}>
          <h3>{title}</h3>
        </Title>
      </Main>
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
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
