"use client"

import { Checkbox } from 'antd';

interface Props {
}

const defaultProps = {
}

const AppChart = ({ ...props }: Props)=> {
    const { children } = { ...defaultProps, ...props }

    return (
        <div className='app-checkbox'>
            <Checkbox>{ children }</Checkbox>
        </div>
    )
}

export default AppChart
