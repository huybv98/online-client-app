"use client"

import React, {useEffect} from "react";
import * as OIcons from '@heroicons/react/24/outline'
import * as SIcons from '@heroicons/react/24/solid'

interface Props {
    disabled?: boolean,
    name: string,
    type?: 'outline' | 'solid',
    color?: string,
}

const defaultProps = {
    disabled: false,
    name: '',
    type: 'outline',
    color: ''
}

const defaultClassSvg = 'md:w-3 md:h-3 lg:w-5 lg:h-5'
const disabledClassSvg = 'disabled'

const AppSvgIcon = ({ ...props }: Props) => {
    const { disabled, type, color, className } = { ...defaultProps, ...props}
    let icons = { ...OIcons }
    let disCls = ''
    let cls = `${defaultClassSvg}`
    const Style: React.CSSProperties = {
        color: color,
    }

    if(type === 'solid') {
        icons = { ...SIcons }
    } else {
        icons = { ...OIcons }
    }

    const SvgIcon: JSX.Element = icons[props.name]

    useEffect(() => {
        if(disabled){
            disCls = disabledClassSvg
        }else {
            disCls = ''
        }
        cls += disCls
    }, [disabled]);

    return (
        <>
            <div className={`app-svg-icon ${className || ''}`}>
                <SvgIcon aria-hidden="true" className={cls} style={Style} />
            </div>
        </>
    )
}

export default AppSvgIcon
