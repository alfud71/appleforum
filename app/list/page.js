import { connectDB } from '@/util/database'
import Link from 'next/link'
import DetailLink from './DetailLink'

export default async function List() {
  let client = await connectDB
  const db = client.db('forum')
  let result = await db.collection('post').find().toArray()
  return (
    <div className="list-bg">
      {result.map((list, i) => (
        <div className="list-item" key={i}>
          <Link href={'/detail/' + list._id}>
            <h4>{list.title}</h4>
          </Link>
          <Link href={'/edit/' + list._id}>✏️</Link>
          {/* <DetailLink /> */}
          <p>{list.content}</p>
        </div>
      ))}
    </div>
  )
}
