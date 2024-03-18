'use client'

import { ConfigProvider } from 'antd'

const AntdContainer = ({ children }: any) => {
  return <ConfigProvider>{children}</ConfigProvider>
}

export default AntdContainer
