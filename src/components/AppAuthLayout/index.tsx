"use client"

import { Background, Colors, LayoutHeight } from '@/assets/style/variables'

interface Props {
    children: React.ReactNode
}

import { Layout } from 'antd'
import urlBgLogin from '@/assets/images/bg_page_login.png'
import { auth } from '@/utils/auth'
import { usePathname, useRouter } from 'next/navigation'

const Style: React.CSSProperties = {
    backgroundColor: Background.primary,
    color: Colors.primary,
    backgroundImage: `url('${urlBgLogin.src}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const AppAuthLayout = ({children}: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    auth.handleRedirect(router, pathname)

    return (
        <div className='app-page'>
            <Layout style={Style} className='app-auth-layout'>
                {children}
            </Layout>
        </div>
    )
}

export default AppAuthLayout
