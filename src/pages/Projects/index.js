import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Button from '../../components/Button';
import { API_URL } from '../../config/constants';
import {
  useCreateProject, useDeleteProject, useEditProject, useGetAllProjects,
} from '../../hooks/projects';

const Projects = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
  });

  const {
    projects,
    error: queryError,
    isLoading: queryLoading,
  } = useGetAllProjects();

  const {
    createProject,
    error: createError,
    isLoading: createLoading,
  } = useCreateProject();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = state;
    createProject({ title, description });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
  console.log('rerender...');
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
        />
        <input
          name='description'
          placeholder='description'
          value={state.description}
          onChange={handleChange}
        />
        <Button>Create</Button>
      </form>
      <br />
      <br />
      <br />
      <br />
      {projects.map((project) => (
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
          <Button onClick={() => editProject({ id: project.id, ...state })}>Edit</Button>
          <Button onClick={() => deleteProject({ id: project.id })}>Delete</Button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Projects;
