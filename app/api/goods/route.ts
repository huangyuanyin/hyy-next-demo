import { NextResponse } from 'next/server'

export const GET = () => {
  return NextResponse.json({
    success: true,
    errorMessage: '',
    data: [
      {
        id: 1,
        name: 'hyy'
      },
      {
        id: 2,
        name: 'zaq'
      }
    ]
  })
}
