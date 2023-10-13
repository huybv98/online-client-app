"use client"

import React, { useState } from 'react'
import { Layout } from 'antd'
import AppGlobalHeader from '@/components/AppGlobalHeader/Index'
import AppGlobalFooter from '@/components/AppGlobalFooter/Index'
import SideMenu from '@/components/AppMenu/SideMenu'
import { Background, Colors, LayoutHeight } from '@/assets/style/variables'
// import { Head } from "next/head";

const { Header, Footer, Sider, Content } = Layout
const Style: React.CSSProperties = {
  backgroundColor: Background.primary,
  color: Colors.primary,
}
const siderStyle: React.CSSProperties = {
  backgroundColor: Background.secondary,
  minHeight: '100vh',
  color: Colors.primary,
}
const headerStyle: React.CSSProperties = {
  backgroundColor: Background.white,
  height: LayoutHeight.Height,
  lineHeight: LayoutHeight.lineHeight,
  color: 'inherit',
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
    <div className='app-page'>
      {/*<Head>*/}
      {/*  <title>123</title>*/}
      {/*</Head>*/}
      <Layout style={Style}>
        <Sider collapsed={visible} style={siderStyle} collapsedWidth={64} width={280}>
          <SideMenu visible={visible} />
        </Sider>
        <Layout style={Style}>
          <Header style={headerStyle} className="p-0">
            <AppGlobalHeader visible={visible} onChangeVisible={handleChangeVisible} />
          </Header>
          <div className="inner-layout">
            <Content>
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
  )
}

export default AppLayout
