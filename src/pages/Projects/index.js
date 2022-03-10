import { useState } from 'react';
import Button from '../../components/Button';
import ProjectListItem from '../../components/ProjectListItem';
import { PRIORITIES } from '../../config/constants';
import {
  useCreateProject, useProjects,
} from '../../hooks/projects';

const Projects = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
    code: '',
    startDate: new Date().toISOString().split('T')[0],
  });

  const {
    projects,
    error: queryError,
    isLoading: queryLoading,
    isFetching,
  } = useProjects();

  const {
    createProject,
    error: createError,
    isLoading: createLoading,
  } = useCreateProject();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      description,
      code,
      priority,
    } = state;

    createProject({
      title,
      description,
      code,
      priority: parseInt(priority),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`asd >> ${name} --> ${value}`);
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (queryLoading) {
    return (
      <p>loading...</p>
    );
  }

  const inputStyle = {
    height: '40px',
    padding: '10px',
    margin: '10px',
    width: '200px',
  };

  return (
    <div
      className='App'
      style={{
        backgroundColor: '#111',
        height: '100vh',
        color: 'white',
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          placeholder='title'
          value={state.title}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name='description'
          placeholder='description'
          value={state.description}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name='code'
          placeholder='code'
          value={state.code}
          onChange={handleChange}
          style={inputStyle}
          maxLength={2}
        />
        <select
          name='priority'
          value={state.priority}
          onChange={handleChange}
          style={inputStyle}
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
        <Button>Create</Button>
      </form>
      <br />
      <br />
      <br />
      <br />
      {projects.map((project) => (
        <ProjectListItem key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
