import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function Modal({ children, btnTxt }, ref) {
  const dialogRef = useRef()
  useImperativeHandle(ref, () => {
    return {
      // exposes a method to open dialog
      open() {
        dialogRef.current.showModal();
      },

      // exposes a method to close dialog
      close() {},
    }
  })
  return createPortal(
    <dialog ref={dialogRef} className='backdrop:bg-stone-900/90 p-4 rouded-md shadow-md'>
      {children}
      <form action="dialog" className='mt-4 text-right'>
        <Button>{btnTxt}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root'),
  )
})

export default Modal
