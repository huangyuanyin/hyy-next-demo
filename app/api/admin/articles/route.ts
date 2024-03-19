import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export const GET = async () => {
  // 查询数据，根据创建时间倒叙排列
  const data = await prisma.article.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc'
    }
  })
  return NextResponse.json({
    success: true,
    errorMessage: '登录成功',
    data: {
      list: data
    }
  })
}

export const POST = async (req: NextRequest) => {
  const data = await req.json() // 获取请求体中传递的json数据
  await prisma.article.create({
    data
  })
  return NextResponse.json({
    success: true,
    errorMessage: '创建成功',
    data: {}
  })
}
