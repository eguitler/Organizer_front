import {
  Link,
  useLocation, useNavigate, useParams, useSearchParams,
} from 'react-router-dom';
import { useGetProject } from '../../hooks/projects';

const Project = () => {
  const { id } = useParams();

  const { project, isLoading } = useGetProject(id);

  if (isLoading) {
    return (
      <span>Loading...</span>
    );
  }

  return (
    <>
      <Link to='/projects'>Atras</Link>
      <p>{`${project.title} [${project.code}]`}</p>
      {project.description}
    </>
  );
};

export default Project;
