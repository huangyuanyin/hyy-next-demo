import { Metadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: any
}

// 动态的进行metadata的生成
export const generateMetadata = async ({ params, searchParams }: Props): Promise<Metadata> => {
  return {
    title: '这是一个详情页--' + params.id
  }
}

const ListDetailPage = ({ params, searchParams }: Props) => {
  return (
    <div>
      ListDetailPage -- {params.id}, query -- {searchParams.name}
    </div>
  )
}

export default ListDetailPage
