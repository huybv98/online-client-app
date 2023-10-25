"use client"

import { Background, Colors, LayoutHeight } from '@/assets/style/variables'

interface Props {
    children: React.ReactNode
}

import { Layout } from 'antd'

const Style: React.CSSProperties = {
    backgroundColor: Background.primary,
    color: Colors.primary,
}

const AppAuthLayout = ({ children }: Props)=> {


  return (
    <div className='app-page'>
        <Layout style={Style} className='app-auth-layout'>
            { children }
        </Layout>
    </div>
  )
}

export default AppAuthLayout
