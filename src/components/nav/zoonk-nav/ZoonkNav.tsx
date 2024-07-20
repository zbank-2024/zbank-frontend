import { Routs } from '@/util/constant'
import Link from 'next/link'
import { Logo } from '../../ui/icon/Logo'

const ZoonkNav = () => {
  return (
    <nav className='flex items-center gap-4'>
      <Link href={Routs.HOME}>
        <Logo />
      </Link>
      <Link href={Routs.HOME}>
        <span className='text-3xl font-bold'>Zoonk</span>
      </Link>
    </nav>
  )
}

export default ZoonkNav
