import { Row, Col } from 'antd'
import url from '@/assets/images/javascript.jpg'

const SourseManage = async () => {
    const listSourse = []
    for(let i = 1; i<= 20; i++){
        let item = {
            sourseId: i,
            sourseImageUrl: url.src,
            sourseName: 'Khóa học Javascript từ cơ bản đến chuyên sâu',
            authorName: 'HuyBV',
            duration: '6 tháng'
        }
        listSourse.push(item)
    }

    return (
        <>
            <div className='text-2xl font-bold'>Quản lý khóa học</div>
            <div className='my-2 text-center text-2xl'>Danh sách khóa học</div>
            <div className='app-list'>
                <Row gutter={[16, 16]}>
                { listSourse && listSourse.length > 0 && listSourse.map((item, index) => (
                        <Col xs={24} sm={24} md={12} lg={8}  xl={6} xxl={6}>
                            <div className='app-list-item' key={index}>
                                <div className='item item-image'>
                                    <img src={ item.sourseImageUrl } alt='sourseImage' className='w-full'/>
                                </div>
                                <div className='item item-sourse'>{ item.sourseName }</div>
                                <div className='item item-author'>{ item.authorName }</div>
                                <div className='item item-duration'>{ item.duration }</div>
                            </div>
                        </Col>
                ))}
                </Row>
            </div>
        </>
    )
}

export default SourseManage
