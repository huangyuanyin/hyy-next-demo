'use client'
import { Button, Card, Form, Input, Table } from 'antd'
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons'
import PageContainer from '../../_components/PageContainer'

const UsersPage = () => {
  return (
    <Card
      title="用户信息"
      extra={
        <>
          <Button icon={<PlusCircleOutlined />} type="primary" />
        </>
      }
    >
      <Form layout="inline">
        <Form.Item label="用户名" name="username">
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined />} type="primary" />
        </Form.Item>
      </Form>
      <Table style={{ marginTop: '8px' }} columns={[{ title: '序号' }, { title: '名字' }, { title: '昵称' }, { title: '手机号' }]} />
    </Card>
  )
}

export default UsersPage
