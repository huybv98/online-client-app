"use client"

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, MenuProps, Tooltip } from 'antd'
import {
  BellIcon,
  Cog8ToothIcon,
  EllipsisHorizontalCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import { auth } from '@/utils/auth'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  visible: boolean
  onChangeVisible: (value: boolean) => void
}

const defaultProps = {
  visible: false,
}


const AppGlobalHeader = ({ ...props }: Props) => {
  const { visible, onChangeVisible } = { ...defaultProps, ...props }
  const items: MenuProps['items'] = [
    {
      label: 'Tài khoản cá nhân',
      key: 'USER_ACCOUNT',
    },
    {
      label: 'Đăng xuất',
      key: 'SIGN_OUT',
    }
  ]
  const router = useRouter()
  const pathname = usePathname()

  const handleClickVisible = () => {
    onChangeVisible(!visible)
  }

  const handleMenuClick: MenuProps['onClick'] = ({key}) => {
    if (key === 'USER_ACCOUNT') {
      handleUserAccount()
    } else if (key === 'SIGN_OUT') {
      handleSignOut()
    }
  }

  const handleUserAccount = () => {
    console.log('handleUserAccount')
  }

  const handleSignOut = () => {
    const isSuccess = auth.signOutSuccess()
    if(isSuccess){
      auth.handleRedirect(router, pathname)
    }
  }

  return (
    <>
      <div className='header flex relative px-6'>
        <div className='flex justify-center items-center' onClick={ handleClickVisible }>
          {visible ? (
            <MenuUnfoldOutlined className='trigger' />
          ) : (
            <MenuFoldOutlined className='trigger' />
          )}
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='flex justify-between items-center ml-auto'>
            <div className='header-icon hover-app-text'>
              <Tooltip title='Thiết lập & Quản trị'>
                <div>
                  <Cog8ToothIcon />
                </div>
              </Tooltip>
            </div>
            <div className='header-icon hover-app-text'>
              <Tooltip title='Tiện ích'>
                <div>
                  <EllipsisHorizontalCircleIcon />
                </div>
              </Tooltip>
            </div>
            <div className='header-icon hover-app-text'>
              <Tooltip title='Thông báo'>
                <div>
                  <BellIcon />
                </div>
              </Tooltip>
            </div>
            <div className='header-icon hover-app-text'>
              <Tooltip title='Trợ giúp'>
                <div>
                  <QuestionMarkCircleIcon />
                </div>
              </Tooltip>
            </div>
            <div className='header-avatar'>
              <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={['click']} overlayClassName='custom-dropdown-avatar'>
                <Avatar size='small' className='avatar' onClick={(e) => e.preventDefault()}>
                  BVH
                </Avatar>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppGlobalHeader
