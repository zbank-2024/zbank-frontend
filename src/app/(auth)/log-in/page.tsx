'use client'
import Button from '@/components/ui/button/Button'
import Input from '@/components/ui/input/Input'
import { Routes } from '@/util/constant'

export default function Login() {
  return (
    <section className='flex flex-grow flex-col gap-10 max-[1920px]:gap-[2.1vw] justify-center align-middle'>
      <Input fieldLabel='Email' placeholder='Enter your email' />
      <Input fieldLabel='Password' placeholder='Enter your password' />
      <Button text='Log in' />
      <p className='text-[var(--text-color-secondary)] max-[1920px]:text-[.835vw]'>
        {'Don’t have an account? '}
        <a className='text-[var(--text-color-primary)] font-bold ' href={Routes.SIGN_UP}>
          Create Now
        </a>
      </p>
    </section>
  )
}
