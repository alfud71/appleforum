import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
export default async function handler(요청, 응답) {
  let settion = await getServerSession(요청, 응답, authOptions)
  console.log(',,요청', 요청.body)
  if (요청.method == 'POST') {
    JSON.parse(요청.body)
    let 저장할거 = {
      content: 요청.body.comment,
      parent: new ObjectId(요청.body._id),
      author: settion.user.email,
    }
    let db = (await connectDB).db('forum')
    let result = await db.collection('comment').insertOne(저장할거)
    응답.status(200).json('저장완료')
  }
}
