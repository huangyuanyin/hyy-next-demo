'use client'
import { useRouter } from 'next/navigation'
import { Card, Form, Button, Input } from 'antd'

const LoginPage = () => {
  const nav = useRouter()
  return (
    <div className="pt-20">
      <Card title="信安知识库" className="w-4/5 mx-auto">
        <Form
          labelCol={{ span: 3 }}
          onFinish={async (v) => {
            const res = await fetch('/api/admin/login', {
              method: 'POST',
              body: JSON.stringify(v)
            }).then((res) => {
              res.json()
            })
            console.log('登录成功', res)
            nav.push('/admin/dashboard')
          }}
        >
          <Form.Item name="username" label="用户名">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
