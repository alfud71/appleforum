'use client'

import Link from 'next/link'

export default function ListItem({ result }) {
  return (
    <>
      {result.map((list, i) => (
        <div className="list-item" key={i}>
          <Link href={'/detail/' + list._id}>
            <h4>{list.title}</h4>
          </Link>
          <Link href={'/edit/' + list._id}>✏️</Link>
          {/* <DetailLink /> */}
          <span
            onClick={(e) => {
              fetch('/api/post/delete', {
                method: 'DELETE',
                body: list._id,
              })
                .then((r) => {
                  if (r.status == 200) {
                    return r.json()
                  } else {
                    //서버가 에러코드 전송시 실행할 코드
                  }
                })
                .then((r) => {
                  console.log(r)
                  e.target.parentElement.style.opacity = 0
                  setTimeout(() => {
                    e.target.parentElement.style.display = 'none'
                  }, 1000)
                })
                .catch((error) => {
                  //인터넷문제로 실패시 실행할 코드
                  console.log(error)
                })
            }}
          >
            🗑️
          </span>
          <p>{list.content}</p>
        </div>
      ))}
    </>
  )
}
