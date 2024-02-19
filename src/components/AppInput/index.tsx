"use client"

import { Input } from 'antd';

interface Props {
    type?: 'text' | 'password' | 'textarea' | 'number',
    placeholder?: string
}

const defaultProps = {
    type: 'text',
    placeholder: ''
}

const AppInput = ({ ...props }: Props)=> {
    const { type, value } = { ...defaultProps, ...props }

    return (
        <div className={'app-input'+` ${props?.className || ''}`}>
            {
                (type === 'text' || type === 'number') && (
                    <Input value={value} { ...props }/>
                )
            }
            {
                type === 'password' && (
                    <Input.Password value={value} { ...props }/>
                )
            }
            {
                type === 'textarea' && (
                    <Input.TextArea value={value} { ...props }/>
                )
            }
        </div>
    )
}

export default AppInput
