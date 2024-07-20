import { forwardRef } from 'react'
import type { InputProp } from './Input.type'

const Input = forwardRef<HTMLInputElement, InputProp>(({ fieldLabel, ...props }, ref) => {
  return (
    <div className='flex flex-col w-full gap-[0.6vw]'>
      <label className='max-[1920px]:text-[.95vw] font-bold'>{fieldLabel}</label>
      <input
        ref={ref}
        className='p-4 text-[1.25rem] border-2 border-solid border-[var(--border-color)] rounded-[10px] 
        max-[1920px]:border-[.15vw] max-[1920px]:p-[2.9%] max-[1920px]:text-[1vw] max-[1920px]:rounded-[.75vw]'
        {...props}
      />
    </div>
  )
})

export default Input
