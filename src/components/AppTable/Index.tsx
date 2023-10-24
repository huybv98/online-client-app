"use client"

import {Input, Table} from "antd";
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
    title: '',
}

const AppTable = ({...props}: Props) => {
    const { title, dataSource, columns, visibleFullScreen, rowKey } = { ...defaultProps, ...props }

    return (
        <>
            {
                !visibleFullScreen ? (
                    <div className="app-table">
                        <div className='app-table-head p-4'>
                            <div className='app-table-head-wrapper flex items-center'>
                                <div className='app-table-head-title'>
                                    <div className='flex'>{ title }</div>
                                </div>
                                <div className='app-table-head-extra flex ml-auto'>
                                    <div className='app-input app-input-search mr-4'>
                                        <Input placeholder="Tìm kiếm nhanh" className='min-w-[280px]'/>
                                    </div>
                                    <div className='flex items-center'>
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
                                </div>
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
