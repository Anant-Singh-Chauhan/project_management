export default function Sidebar({
  handleStartAddProject,
  handleSelectedProject,
  selectedProjectId,
  projects,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl bg">
      <h2 className="mb-8 font-bold uppercase md:text-xl ">Your Projects</h2>
      <div className="">
        <button
          className="px-4 py-2 text-xs  md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100"
          onClick={handleStartAddProject}
        >
          + Add Project{' '}
        </button>
        <ul className="mt-8">
          {projects.map((prj) => {
            let cssClasses =
              'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 '
            if (prj.id === selectedProjectId) {
              cssClasses += ' text-stone-200 bg-stone-800'
            } else {
              cssClasses += ' text-stone-400 '
            }
            return (
              <li key={prj.id}>
                <button
                  onClick={() => {
                    handleSelectedProject(prj.id)
                  }}
                  className={cssClasses}
                >
                  {prj.title}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
