"use client"

import { Background, Colors, LayoutHeight } from '@/assets/style/variables'

interface Props {
    children: React.ReactNode
}

import { Layout } from 'antd'
import urlBgLogin from '@/assets/images/bg_page_login.png'

const Style: React.CSSProperties = {
    backgroundColor: Background.primary,
    color: Colors.primary,
    backgroundImage: `url('${urlBgLogin.src}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const AppAuthLayout = ({ children }: Props)=> {


  return (
    <div className='app-page'>
        <Layout style={Style} className='app-auth-layout' >
            { children }
        </Layout>
    </div>
  )
}

export default AppAuthLayout
