import { connectDB } from '/util/database.js'

export default async function Home() {
  let client = await connectDB
  const db = client.db('forum')
  let result = await db.collection('post').find().toArray()

  console.log('result', result)
  return <div>안녕</div>
}
