"use client"

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import {Avatar, Dropdown, MenuProps, Space, Tooltip} from 'antd'
import {
  BellIcon,
  Cog8ToothIcon,
  EllipsisHorizontalCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'

interface Props {
  visible?: boolean
  onChangeVisible: (value: boolean) => void
}


const GlobalHeader = ({ ...props }: Props) => {
  const { visible, onChangeVisible } = props
  const items: MenuProps['items'] = [
    {
      label: 'Tài khoản cá nhân',
      key: '0',
    },
    {
      label: 'Đăng xuất',
      key: '1',
    }
  ];

  const handleClickVisible = () => {
    onChangeVisible(!visible)
  }

  return (
    <>
      <div className="header flex relative px-6">
        <div className="flex justify-center items-center" onClick={handleClickVisible}>
          {visible ? (
            <MenuUnfoldOutlined className="trigger" />
          ) : (
            <MenuFoldOutlined className="trigger" />
          )}
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center ml-auto">
            <div className="header-icon hover-app-text">
              <Tooltip title="Thiết lập & Quản trị">
                <div>
                  <Cog8ToothIcon />
                </div>
              </Tooltip>
            </div>
            <div className="header-icon hover-app-text">
              <Tooltip title="Tiện ích">
                <div>
                  <EllipsisHorizontalCircleIcon />
                </div>
              </Tooltip>
            </div>
            <div className="header-icon hover-app-text">
              <Tooltip title="Thông báo">
                <div>
                  <BellIcon />
                </div>
              </Tooltip>
            </div>
            <div className="header-icon hover-app-text">
              <Tooltip title="Trợ giúp">
                <div>
                  <QuestionMarkCircleIcon />
                </div>
              </Tooltip>
            </div>
            <div className="header-avatar">

              <Dropdown menu={{ items }} trigger={['click']}>
                <Avatar size="small" className="avatar">
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

GlobalHeader.propTypes = {
  visible: PropTypes.bool,
}
GlobalHeader.defaultProps = {
  visible: false,
}

export default GlobalHeader
