export default {
  pages: 0,
  total: 0,
  current: 1,
  pageSize: 10,
  showSizeChanger: true,
  showQuickJumper: true,
  pageSizeOptions: ['10', '25', '50', '100'],
  showTotal: (total: number) => {
    return 'Tổng số dòng ' + total
  },
  reset: function () {
    if (this.pages > 0 && this.current === this.pages && this.total % 10 === 1) {
      this.current -= 1
    }
  }
}
