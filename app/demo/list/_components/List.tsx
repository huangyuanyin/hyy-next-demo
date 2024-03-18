'use client'
import { useEffect, useState } from 'react'

type Item = {
  id: string
  name: string
}

const List = () => {
  const [data, setData] = useState<Item[]>([])
  console.log(1)
  useEffect(() => {
    fetch('/api/goods')
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
      })
  }, [])

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
