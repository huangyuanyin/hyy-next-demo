import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('中间件执行了')
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // 访问的如果是管理后台，我们可以做一些权限校验
    if (!request.nextUrl.pathname.startsWith('/admin/login')) {
      // 如果不是登录页面，需要校验登录状态
      if (!request.cookies.get('admin-token')) {
        return NextResponse.redirect(new URL('/admin/login', request.nextUrl))
      }
    }
  }
}
