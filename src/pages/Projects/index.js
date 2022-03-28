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
    isCreate: false,
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
      priority,
    } = state;

    createProject({
      title,
      description,
      priority: parseInt(priority),
    });

    editModal.current.close();
  };

  const handleSaveProjectData = (e) => {
    e.preventDefault();
    editProject(state);
    editModal.current.close();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (project) => {
    setState({
      id: project.id,
      title: project.title,
      description: project.description,
      isCreate: false,
    });

    editModal.current.open();
  };

  const handleDelete = (id) => {
    deleteProject(id);
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
        <Button
          onClick={() => {
            setState((prev) => ({ ...prev, isCreate: true }));
            editModal.current.open();
          }}
        >
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
        {state.isCreate ? 'Create' : 'Edit'}
        <form onSubmit={state.isCreate ? handleCreateProject : handleSaveProjectData}>
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
            {state.isCreate ? 'Create' : 'Edit'}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Projects;
