/**
 *
 * @param pageSize
 * @param currentPage
 * @param rowIndex
 */
const getTableRowIndex = (pageSize: number, currentPage: number, rowIndex: number): number => {
    if (currentPage === 0) {
        currentPage = 1
    }
    return (currentPage - 1) * pageSize + rowIndex + 1
}

export {
    getTableRowIndex
}
