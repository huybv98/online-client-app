"use client"

import {Table} from "antd";
import {columnsType} from "@/types/table";
import PropTypes from "prop-types";

interface Props {
    dataSource: Array<any>
    columns: Array<columnsType>
    visibleFullScreen: boolean
}

const AppTable = ({...props}: Props) => {
    const {dataSource, columns, visibleFullScreen} = props

    return (
        <>
            {
                !visibleFullScreen ? (
                    <div className="app-table">
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                        />
                    </div>
                ) : ''
            }
        </>
    )
}

AppTable.propTypes = {
    dataSource: PropTypes.array,
    columns: PropTypes.array,
    visibleFullScreen: PropTypes.bool,
}
AppTable.defaultProps = {
    dataSource: [],
    columns: [],
    visibleFullScreen: false,
}

export default AppTable
