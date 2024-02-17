import Tasks from "./helpers/Tasks";
export default function SelectedProject({project, tasks, handleDelete, handleAddTask, handleDeleteTask}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });

  return (
    <div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-300 '>
            <div className="flex flex-row gap-1 justify-between items-center">
                <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
                <button className='text-stone-600 hover:text-stone-950' onClick={()=>{handleDelete(project.id)}}>Delete</button>
            </div>
            <p className='mb-4 text-stone-400'>{formattedDate}</p>
            <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
        </header>
        <Tasks handleAdd={handleAddTask} handleDelete={handleDeleteTask} selectedId={project.id} tasks={tasks}/>
    </div>
  )
}
