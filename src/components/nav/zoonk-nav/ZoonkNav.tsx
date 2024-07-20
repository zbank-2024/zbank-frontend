import { Routs } from '@/util/constant'
import Link from 'next/link'
import { Logo } from '../../ui/icon/Logo'

const ZoonkNav = () => {
  return (
    <nav className='flex w-min items-center gap-[8%]'>
      <Link href={Routs.HOME}>
        <Logo className='w-[2.5vw] min-[1920px]:w-[48px] h-auto' />
      </Link>
      <Link className='text-[1.565vw] min-[1920px]:text-3xl font-bold' href={Routs.HOME}>
        <span className='leading-none'>Zoonk</span>
      </Link>
    </nav>
  )
}

export default ZoonkNav
