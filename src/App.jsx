import { useState } from 'react'
import Sidebar from './components/Sidebar'
import AddProject from './components/AddProject'
import NoProjectSelected from './components/NoProjectSelected'
import SelectedProject from './components/SelectedProject'
import './App.css'
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  })

  // to show add project form
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  // to cancel add project
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  // to process add project form submission
  function handleAddProject(newProjectObj) {
    const newProject = {
      ...newProjectObj,
      id: Math.random(),
    }
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      }
    })

    handleCancelAddProject()
  }

  // to update selected project id
  function handleSelectedProjectUpdate(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      }
    })
  }

  // handle delete
  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      let newProjects = prevState.projects.filter((prj) => prj.id != id);

      return {
        ...prevState,
        projects: newProjects,
        selectedProjectId: undefined
      }
    })
  }
  return (
    <>
      <header className="text-3xl font-bold">ProManager</header>
      <main className="h-screen my-4 flex flex-row gap-8">
        <Sidebar
          projects={projectsState.projects}
          selectedProjectId={projectsState.selectedProjectId}
          handleStartAddProject={handleStartAddProject}
          onCancelAddProject={handleCancelAddProject}
          handleSelectedProject={handleSelectedProjectUpdate}
        />
        {projectsState.selectedProjectId === undefined ? (
          <NoProjectSelected handleStartAddProject={handleStartAddProject} />
        ) : projectsState.selectedProjectId === null ? (
          <AddProject
            onCancelAddProject={handleCancelAddProject}
            onAddProject={handleAddProject}
          />
        ) : (
          <SelectedProject
            project={projectsState.projects.find(
              (elem) => elem.id === projectsState.selectedProjectId,
            )}

            handleDelete = {handleDeleteProject}
          />
        )}
      </main>
    </>
  )
}

export default App
