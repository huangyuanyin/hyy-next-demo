'use client'
import { Button, Card, Form, Input, Modal, Space, Table } from 'antd'
import { SearchOutlined, PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const ArticlePage = () => {
  const [open, setOpen] = useState(false)
  const [list, setList] = useState([])
  const [myForm] = Form.useForm() // 获取Form组件
  const [query, setQuery] = useState({})

  // 监听查询条件的改变
  useEffect(() => {
    fetch('/api/admin/articles')
      .then((res) => res.json())
      .then((res) => {
        setList(res.data.list)
      })
  }, [query])

  return (
    <Card
      title="文章管理"
      extra={
        <>
          <Button icon={<PlusCircleOutlined />} type="primary" onClick={() => setOpen(true)} />
        </>
      }
    >
      <Form layout="inline">
        <Form.Item label="标题" name="username">
          <Input placeholder="请输入标题进行搜索" />
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined />} type="primary" />
        </Form.Item>
      </Form>
      <Table
        style={{ marginTop: '8px' }}
        dataSource={list}
        rowKey="id"
        columns={[
          {
            title: '序号',
            width: 80,
            render(v, r, i) {
              return i + 1
            }
          },
          { title: '标题', dataIndex: 'title' },
          { title: '简介', dataIndex: 'desc' },
          {
            title: '操作',
            render(v, r, i) {
              return (
                <Space>
                  <Button size="small" icon={<EditOutlined />} />
                  <Button size="small" icon={<DeleteOutlined />} />
                </Space>
              )
            }
          }
        ]}
      />
      <Modal
        title="编辑"
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => {
          myForm.submit()
        }}
      >
        <Form
          layout="vertical"
          form={myForm}
          onFinish={async (v) => {
            console.log(v)
            // 此处调接口
            await fetch('/api/admin/articles', {
              method: 'POST',
              body: JSON.stringify(v)
            }).then((res) => res.json())
            setOpen(false)
            setQuery({}) // 改变query会重新取数据
          }}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: '标题不能为空'
              }
            ]}
          >
            <Input placeholder="请输入标题" />
          </Form.Item>
          <Form.Item label="简介" name="desc">
            <Input.TextArea placeholder="请输入简介" />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  )
}

export default ArticlePage
