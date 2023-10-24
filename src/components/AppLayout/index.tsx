"use client"

import React, { useState } from 'react'
import { Layout } from 'antd'
import AppGlobalHeader from '@/components/AppGlobalHeader/Index'
import AppGlobalFooter from '@/components/AppGlobalFooter/Index'
import SideMenu from '@/components/AppMenu/SideMenu'
import { Background, Colors, LayoutHeight } from '@/assets/style/variables'

const { Header, Footer, Sider, Content } = Layout
const Style: React.CSSProperties = {
  backgroundColor: Background.white,
  color: Colors.primary,
}
const siderStyle: React.CSSProperties = {
  backgroundColor: Background.white,
  minHeight: '100vh',
  color: Colors.primary,
}
const headerStyle: React.CSSProperties = {
  backgroundColor: Background.white,
  height: LayoutHeight.Height,
  lineHeight: LayoutHeight.lineHeight,
  color: 'inherit',
}

const contentStyle :React.CSSProperties = {
  backgroundColor: Background.primary,
}
const footerStyle: React.CSSProperties = {
  backgroundColor: Background.white,
  height: LayoutHeight.Height,
  lineHeight: LayoutHeight.lineHeight,
  color: 'inherit',
}

interface Props {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props)=> {
  const [visible, setVisible] = useState<boolean>(false)

  const handleChangeVisible = (visible: boolean) => {
    setVisible(visible)
  }

  return (
      <>
        <div className='app-page'>
          <Layout style={Style} className='app-layout'>
            <Sider collapsed={visible} style={siderStyle} collapsedWidth={64} width={280}>
              <SideMenu visible={visible} />
            </Sider>
            <Layout style={Style} className='app-layout-item'>
              <Header style={headerStyle} className="p-0">
                <AppGlobalHeader visible={visible} onChangeVisible={handleChangeVisible} />
              </Header>
              <div className="inner-layout">
                <Content style={contentStyle}>
                  <div className="content">
                    {children}
                  </div>
                </Content>
                <Footer style={footerStyle} className="p-0">
                  <AppGlobalFooter />
                </Footer>
              </div>
            </Layout>
          </Layout>
        </div>
      </>
  )
}

export default AppLayout
