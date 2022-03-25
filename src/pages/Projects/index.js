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
    code: '',
    title: '',
    description: '',
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
    console.log('asd>> PROJECT SAVE: ', state);

    e.preventDefault();
    editProject(state);
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
    setState({
      code: project.code,
      title: project.title,
      description: project.description,
    });
    console.log('asd>> PROJECT EDIT: ', project);
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
        {state.code ? 'Edit' : 'Create'}
        <form onSubmit={state.code ? handleSaveProjectData : handleCreateProject}>
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
            {state.code ? 'Edit' : 'Create'}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Projects;
