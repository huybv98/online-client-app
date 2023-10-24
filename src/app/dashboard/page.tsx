'use client'

import AppTable from "@/components/AppTable";
import { useTranslation } from '@/locales/client'

const Dashboard = () => {
    const dataSource = [
        {
            id: 1,
            name: 'Bùi Văn Huy',
            age: 25,
            email: 'huy@gmail.com',
            address: 'Hải Dương',
            note: 'Lorem Ipsum'
        },
        {
            id: 2,
            name: 'Bùi Văn Huân',
            age: 25,
            email: 'huy@gmail.com',
            address: 'Hải Dương',
            note: 'Lorem Ipsum'
        },
        {
            id: 3,
            name: 'Bùi Văn Chiến',
            age: 25,
            email: 'huy@gmail.com',
            address: 'Hải Dương',
            note: 'Lorem Ipsum'
        },
        {
            id: 4,
            name: 'Bùi Minh Ngọc',
            age: 25,
            email: 'huy@gmail.com',
            address: 'Hải Dương',
            note: 'Lorem Ipsum'
        }
    ]
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            align: 'center',
            fixed: 'left',
            ellipsis: false,
            width: 50
        },
        {
            title: 'Tên Nhân Viên',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            ellipsis: false,
            width: 150
        },
        {
            title: 'Tuổi',
            dataIndex: 'age',
            key: 'age',
            align: 'center',
            ellipsis: false,
            width: 150
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            align: 'center',
            ellipsis: false,
            width: 150
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            align: 'center',
            ellipsis: false,
            width: 150
        },
        {
            title: 'Ghi chú',
            dataIndex: 'note',
            key: 'note',
            align: 'center',
            ellipsis: false,
            width: 150
        },
        {
            title: 'Hành động',
            dataIndex: 'operation',
            key: 'operation',
            width: 150,
            fixed: 'right',
            align: 'center'
        }
    ]
    const { t } = useTranslation('translation')
    return (
        <>
            <div>Tổng quan { t('welcome') }</div>
            <AppTable title={'Danh sách'} dataSource={dataSource} columns={columns}/>
        </>
    )
}

export default Dashboard
