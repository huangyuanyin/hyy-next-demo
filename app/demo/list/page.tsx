import { Metadata } from 'next'
import List from './_components/List'

export const metadata: Metadata = {
  title: '这是列表页',
  description: '这是一个使用next输出的列表页',
  keywords: 'next.js,React'
}

const ListPage = () => {
  return (
    <div>
      ListPage
      <List />
    </div>
  )
}

export default ListPage
