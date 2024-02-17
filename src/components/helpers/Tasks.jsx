import NewTask from './NewTask';
export default function Tasks({ tasks, handleAdd, handleDelete, selectedId }) {

    function handleDeleteTask(taskId){
        handleDelete(taskId);
    }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask handleAdd={handleAdd} selectedId={selectedId} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This Project does not have any tasks yet!
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.taskId} className="flex justify-between my-4">
              <span>{task.taskDetail}</span>{' '}
              <button className="text-stone-700 hover:text-red-500" onClick={()=>handleDeleteTask(task.taskId)}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
