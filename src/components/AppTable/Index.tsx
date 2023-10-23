"use client"

import {Table} from "antd";
import {columnsType} from "@/types/table";
import AppSvgIcon from "@/components/AppSvgIcon";

interface Props {
    dataSource: Array<any>
    columns: Array<columnsType>
    visibleFullScreen: boolean
    rowKey: string,
}

const defaultProps = {
    dataSource: [],
    columns: [],
    visibleFullScreen: false,
    rowKey: 'id',
}

const AppTable = ({...props}: Props) => {
    const { dataSource, columns, visibleFullScreen, rowKey} = { ...defaultProps, ...props}

    return (
        <>
            {
                !visibleFullScreen ? (
                    <div className="app-table">
                        <div className='flex justify-items-end items-center'>
                            <div className='cursor-pointer mr-2'>
                                <AppSvgIcon name="ArrowPathIcon"/>
                            </div>
                            <div className='cursor-pointer mr-2'>
                                <AppSvgIcon name="ArrowsPointingOutIcon"/>
                            </div>
                            <div className='cursor-pointer'>
                                <AppSvgIcon name="Cog6ToothIcon"/>
                            </div>
                        </div>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            rowKey={rowKey}
                        />
                    </div>
                ) : ''
            }
        </>
    )
}

export default AppTable
