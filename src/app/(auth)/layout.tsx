import ZoonkNav from '@/components/nav/zoonk-nav/ZoonkNav'
import { PropsWithChildren } from 'react'
import css from './auth.module.scss'

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className={`${css.auth_container} w-full h-full bg-white`}>
      <div className='flex flex-col pt-[5%] px-[18%]'>
        <ZoonkNav />
        <h1 className='mt-[5%] text-[5vw] min-[1920px]:text-[96px] font-bold leading-[120%]'>
          Invest in Crystal Future
        </h1>
        {children}
      </div>
      <div className={`${css.image} bg-cover bg-no-repeat bg-[url("/img/bg-sign.png")]`}>
        <ZoonkNav />
      </div>
    </main>
  )
}

export default AuthLayout
