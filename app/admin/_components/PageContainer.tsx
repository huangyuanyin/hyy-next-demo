'use client'
import { Card } from 'antd'

const PageContainer = ({ children, title }: any) => {
  return <Card title={title}>{children}</Card>
}

export default PageContainer
