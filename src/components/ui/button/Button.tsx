import { FC } from 'react'
import { ButtonProp } from './Button.type'

const Button: FC<ButtonProp> = ({ text, ...props }) => {
  return (
    <button
      className='bg-[var(--button-bg-color-primary)] text-[var(--text-color-primary-inversed)] font-bold rounded-[10px] p-4 text-[1.25rem] max-[1920px]:text-[1.25vw] max-[1920px]:rounded-[.75vw] max-[1920px]:p-[.94vw]'
      {...props}>
      {text}
    </button>
  )
}

export default Button
