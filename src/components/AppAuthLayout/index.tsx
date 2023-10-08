"use client"

import React from "react";

interface Props {
    children: React.ReactNode
}

const AppAuthLayout = ({ children }: Props)=> {


  return (
    <div className='app-page'>
        {children}
    </div>
  )
}

export default AppAuthLayout
