import { useState } from 'react';
import { useQuery } from 'react-query';
import Button from '../../components/Button';

const Projects = () => {
  const [state, setState] = useState({});

  const { data, error, isLoading } = useQuery(
    'asd',
    () => fetch('https://peaceful-anchorage-20425.herokuapp.com/projects')
      .then((res) => res.json()),
  );

  const createProject = () => {

  };

  if (isLoading) {
    return (
      <p>loading...</p>
    );
  }

  return (
    <div
      className='App'
      style={{
        backgroundColor: '#111',
        height: '100vh',
        color: 'white',
      }}
    >
      <form onSubmit={createProject}>
        <input
          placeholder='title'
          value={state.title}
        />
        <input
          placeholder='description'
          value={state.description}
        />
      </form>
      <Button variant='secondary'>Edit</Button>
      <Button>Create</Button>
      <br />
      <br />
      <br />
      <br />
      {data.map((project) => (
        <div key={project.id}>
          <p>
            Titulo:
            {' '}
            <strong>{project.title}</strong>
          </p>
          <p>
            Description:
            {' '}
            <strong>{project.description}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
