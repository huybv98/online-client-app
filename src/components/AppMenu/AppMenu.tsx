"use client"

import { Menu } from 'antd'
import {useEffect, useState} from 'react';
import { MenuItem, MenuObject } from '@/types/menu'
import type { MenuProps } from 'antd'
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/locales/client'
import AppSvgIcon from '@/components/AppSvgIcon/index';

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

const AppMenu = ({...props}) => {
    const { menu } = props
    const [MenuItems, setMenuItems] = useState<Array<MenuItem>>([])
    const router = useRouter();
    const [current, setCurrent] = useState<String>('0');
    const { t } = useTranslation('translation')

    const getMenu = () => {
        if (MenuItems && MenuItems.length === 0) {
            const items: Array<MenuItem> = getListItem(menu)
            setMenuItems(items)
        }
    }

    const getListItem = (menu: MenuObject[] | undefined) => {
        const items: MenuItem[] = []

        if (menu && menu.length) {
            menu.forEach((obj, index) => {
                let label = t(obj.title)
                let Icon: JSX.Element | null = obj.icon ? <AppSvgIcon name={obj.icon}/> : null
                const item = getItem(label, (index + 1).toString(), Icon)
                items.push(item)
            })
        }
        return items
    }

    const handleClick: MenuProps['onClick'] = (e) => {
        const obj: MenuObject[] | undefined = menu && menu.slice(parseInt(e.key) - 1, parseInt(e.key))
        if (obj && obj[0]) {
            const url: string | undefined = obj[0]?.path
            router.push(url || '')
        }
    }

    getMenu()

    return (
        <>
            <div className='app-menu'>
                {MenuItems && (
                    <>
                        <div className='sidebar-collapse'>
                            <Menu
                                defaultSelectedKeys={[current]}
                                mode='inline'
                                theme='light'
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
