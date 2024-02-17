import React, { useRef } from 'react'
import Input from './helpers/Input'
import Button from './helpers/Button'
import Modal from './helpers/Modal'
export default function AddProject({ onAddProject, onCancelAddProject }) {
  const modal = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const dueDateRef = useRef()

  function onSaveAddProject() {
    let saveObj = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    }

    // validations
    if (
      saveObj.title.trim() === '' ||
      saveObj.description.trim() === '' ||
      saveObj.dueDate.trim() === ''
    ) {
      // show modal
      modal.current.open()
      return;
    }
    onAddProject(saveObj)
  }
  return (
    <>
      <Modal ref={modal} btnTxt="Ok">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid inputs detected!
        </h2>
        <p className="text-stone-600 mb-4 ">
          Please fill valid inputs in fields
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 border-4 p-4 rounded-xl">
        <menu className="flex flex-row justify-end items-center gap-4 ">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancelAddProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={onSaveAddProject}>Save</Button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input type="date" label="Due Date" ref={dueDateRef} />
        </div>
      </div>
    </>
  )
}
