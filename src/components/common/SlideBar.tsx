import { GoHistory } from 'react-icons/go'
import { SiNewbalance } from 'react-icons/si'
import { FaWallet } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { PATHS } from '@/utils/enums'

import { VscHome } from 'react-icons/vsc'
import { Link, useLocation } from 'react-router-dom'

const SlideBar = () => {
  const { pathname } = useLocation()
  const isActive = (path: string) => {
    return pathname === path ? 'bg-[#753EFE] border-none' : ''
  }

  return (
    <>
      <div className='bg-black max-w-[300px] fixed w-full h-screen text-white'>
        <div className='flex flex-col space-y-4 p-5'>
          <Link to={PATHS.HOME}>
            <Button
              className={`text-xl border w-full justify-start rounded-[10px] h-[72px] hover:bg-[#895bff] ${isActive(
                PATHS.HOME,
              )}`}
            >
              <VscHome className='mr-2' /> Home
            </Button>
          </Link>
          <Link to={PATHS.CREATE_WALLET}>
            <Button
              className={`text-xl border w-full justify-start rounded-[10px] h-[72px] hover:bg-[#895bff] ${isActive(
                PATHS.CREATE_WALLET,
              )}`}
            >
              <FaWallet className='mr-2' /> Create Wallet
            </Button>
          </Link>
          <Link to={PATHS.BALANCE}>
            <Button
              className={`text-xl border w-full justify-start rounded-[10px] h-[72px] hover:bg-[#895bff] ${isActive(
                PATHS.BALANCE,
              )}`}
            >
              <SiNewbalance className='mr-2' /> Balance
            </Button>
          </Link>
          <Link to={PATHS.HISTORY}>
            <Button
              className={`text-xl border w-full justify-start rounded-[10px] h-[72px] hover:bg-[#895bff] ${isActive(
                PATHS.HISTORY,
              )}`}
            >
              <GoHistory className='mr-2' /> History transaction
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SlideBar
