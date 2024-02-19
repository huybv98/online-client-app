"use client"

import {Button, Input} from 'antd';

interface Props {
    type?: 'primary' | 'dashed' | 'text' | 'link'
}

const defaultProps = {
    type: null,
}

const AppButton = ({ ...props }: Props)=> {
    const { type, children } = { ...defaultProps, ...props }

    return (
        <>
            <div className='app-button w-full'>
                {
                    type ? (
                        <Button { ...props } type={type} className='w-full'>
                            { children }
                        </Button>
                    ) : (
                        <Button { ...props } className='w-full'>
                            { children }
                        </Button>
                    )
                }
            </div>
        </>
    )
}

export default AppButton
