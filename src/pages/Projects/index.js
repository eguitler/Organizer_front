import { useRef, useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ProjectListItem from '../../components/ProjectListItem';
import { INPUT_STYLES, PRIORITIES } from '../../config/constants';
import {
  useCreateProject,
  useDeleteProject,
  useEditProject,
  useProjects,
} from '../../services/projects';

const Projects = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
    code: '',
    startDate: new Date().toISOString().split('T')[0],
  });

  const editModal = useRef();

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

  const handleCreateProject = (e) => {
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

    editModal.current.close();
  };

  const handleSaveProjectData = (e) => {
    e.preventDefault();
    editProject({ id: state.id, ...state });
    editModal.current.close();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`asd >> ${name} --> ${value}`);
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (project) => {
    setState(project);
    editModal.current.open();
  };

  const handleDelete = (id) => {
    deleteProject({ id });
  };

  if (queryLoading) {
    return (
      <p>loading...</p>
    );
  }

  return (
    <>
      <div
        className='App'
        style={{
          height: '100vh',
          color: 'white',
        }}
      >
        <Button onClick={() => editModal.current.open()}>
          New Project
        </Button>
        <br />
        <br />
        <br />
        <br />
        {projects.map((project) => (
          <ProjectListItem
            onEdit={() => handleEdit(project)}
            onDelete={() => handleDelete(project.id)}
            key={project.id}
            data={project}
          />
        ))}
      </div>

      <Modal ref={editModal}>
        {state.id ? 'Edit' : 'Create'}
        <form onSubmit={state.id ? handleSaveProjectData : handleCreateProject}>
          <input
            name='title'
            placeholder='title'
            value={state.title}
            onChange={handleChange}
            style={INPUT_STYLES}
          />
          <input
            name='description'
            placeholder='description'
            value={state.description}
            onChange={handleChange}
            style={INPUT_STYLES}
          />
          <input
            name='code'
            placeholder='code'
            value={state.code}
            onChange={handleChange}
            style={INPUT_STYLES}
            maxLength={6}
            minLength={2}
          />
          <Button
            variant='outlined'
            onClick={(e) => {
              e.preventDefault();
              editModal.current.close();
              setState({});
            }}
          >
            Close
          </Button>
          <Button>
            {state.id ? 'Edit' : 'Create'}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Projects;
