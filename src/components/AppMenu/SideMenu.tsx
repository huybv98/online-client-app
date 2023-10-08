"use client"

import AppLogo from './AppLogo'
import AppMenu from './AppMenu'
import { AppMenuArray } from '@/router/index'

interface Props {
  visible?: boolean
}

const SideMenu = ({ ...props }) => {
  const { visible } = props

  return (
    <>
      <div className="side-menu">
        <AppLogo showLogo={visible} />
        <AppMenu menu={AppMenuArray} />
      </div>
    </>
  )
}

export default SideMenu
