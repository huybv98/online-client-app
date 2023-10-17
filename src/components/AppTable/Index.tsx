"use client"

import {Table} from "antd";
import {columnsType} from "@/types/table";

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
