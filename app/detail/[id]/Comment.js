'use client'

import { useState, useEffect } from 'react'

export default function Comment({ _id }) {
  let [comment, setComment] = useState('')
  let [data, setData] = useState([])
  useEffect(() => {
    // 쓸데없는 코드 보관함 , html로드/재렌더링될때마다 실행됨 / html 보여준 후에 실행됨
    fetch('/api/comment/list?id=' + _id)
      .then((r) => r.json())
      .then((result) => {
        setData(result)
      })
  }, [])

  console.log('id', _id)
  return (
    <div>
      <div>
        {data.length > 0
          ? data.map((a, i) => {
              return <p key={i}>{a.content}</p>
            })
          : '댓글 없음'}
      </div>
      <input
        onChange={(e) => {
          setComment(e.target.value)
        }}
      />
      <button
        onClick={() => {
          fetch('/api/comment/new ', {
            method: 'POST',
            body: JSON.stringify({ comment: comment, _id: _id }),
          })
        }}
      >
        댓글전송
      </button>
    </div>
  )
}
