import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export const POST = async () => {
  return NextResponse.json(
    {
      success: true,
      errorMessage: '登录成功'
    },
    {
      headers: {
        'Set-Cookie': 'admin-token=123456;path=/'
      }
    }
  )
}
