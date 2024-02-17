import { forwardRef } from 'react'

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'

  return (
    <p className="flex flex-col gap-1 my-4 ">
      <label className="text-sm font-bold text-stone-500 uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} ref={ref}></textarea>
      ) : (
        <input className={classes} {...props} ref={ref}/>
      )}
    </p>
  )
})
export default Input