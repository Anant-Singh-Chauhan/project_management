import React, { useState } from 'react'

export default function NewTask({handleAdd, selectedId}) {
    const [task,setTask] = useState("");
    function handleTaskChange(event){
        setTask(event.target.value);
    }

    function handleAddTask(){
        // validate
        if(task.trim()==="") return;

        handleAdd({
            prjId: selectedId,
            task: task
        });

        setTask("");
    }
  return (
    <div className='flex items-center gap-4'>
        <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleTaskChange} value={task}/>
        <button type='submit' className="text-stone-700 hover:text-stone-950" onClick={handleAddTask}> Add Task </button>
    </div>
  )
}
