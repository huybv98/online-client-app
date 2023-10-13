interface CustomCell {
    (record: any, rowIndex: number, column): void
}
export interface Columns {
    title: string
    dataIndex: string
    key: string
    align?: 'left' | 'right' | 'center' // mac dinh left
    fixed?: boolean | string
    ellipsis?: boolean
    width?: boolean | string | number
    colSpan?: number
    customCell?: CustomCell
    customFilterDropdown?: boolean
    onFilter?: any
    onFilterDropdownVisibleChange?: any
    filterMode?: any
    filterIcon?: any
}
export interface Pagination {
    pages: number
    total: number
    current: number
    pageSize: number
    showSizeChanger: boolean
    showQuickJumper: boolean
    pageSizeOptions: Array<string>
    showTotal(): any
    reset(): any
}