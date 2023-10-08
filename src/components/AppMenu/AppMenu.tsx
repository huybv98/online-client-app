"use client"

import { Menu } from 'antd'
import { useState} from "react";
import {MenuItem, MenuObject} from '@/types/menu'
import type { MenuProps } from 'antd'
import { useRouter } from "next/navigation";

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem
}

const getListItem = (menu: MenuObject[] | undefined) => {
    const items: MenuItem[] = []
    if (menu && menu.length) {
        menu.forEach((obj, index) => {
            const item = getItem(obj.title, (index + 1).toString(), obj.icon)
            items.push(item)
        })
    }
    return items
}

const AppMenu = ({...props}) => {
    const {menu} = props
    const [MenuItems, setMenuItems] = useState<Array<MenuItem>>([])
    const router = useRouter();

    const getMenu = () => {
        if (MenuItems && MenuItems.length === 0) {
            const items: Array<MenuItem> = getListItem(menu)
            setMenuItems(items)
        }
    }

    const handleClick: MenuProps['onClick'] = (e) => {
        const obj: MenuObject[] | undefined = menu && menu.splice(parseInt(e.key) - 1, 1)
        if (obj && obj[0]) {
            const url: string | undefined = obj[0]?.path
            router.push(url || '')
        }
    }

    getMenu()
    return (
        <>
            <div className="app-menu">
                {MenuItems && (
                    <>
                        <div className="sidebar-collapse">
                            <Menu
                                defaultSelectedKeys={['1']}
                                mode="inline"
                                theme="light"
                                items={MenuItems}
                                onClick={handleClick}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default AppMenu
