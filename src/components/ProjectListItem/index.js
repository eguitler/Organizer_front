import PropTypes from 'prop-types';
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
  } = data;

  console.log('asd >>> ', title, ' -- ', code);
  return (
    <Container>
      <Code>{code}</Code>
      <Main>
        <Title to={`/projects/${code}`}>
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
    code: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
