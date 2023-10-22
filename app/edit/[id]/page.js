import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'

export default async function Edit(props) {
  console.log('<<<<', props)
  let client = await connectDB
  const db = client.db('forum')
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) })

  return (
    <div className="p-20">
      수정페이지
      <div className="write">
        <form action="/api/post/edit" method="POST">
          <input name="title" defaultValue={result.title} />
          <input name="content" defaultValue={result.content} />
          <input
            style={{ display: 'none' }}
            name="_id"
            defaultValue={result._id.toString()}
          />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  )
}
