import React from 'react'
import Comment from '../Comment'

function Post(prop) {

  const { name, avatar } = prop.post.author
  const { date, content, comments } = prop.post

  return(
    <div className="post-item">
      <div className="meta">
        <div className="avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="dados">
          <h2>{name}</h2>
          <span>{date}</span>
        </div>
      </div>
      <div className="post-content">
        {content}
      </div>

      {comments.map(item => (
        <Comment key={item.id} comment={item}/>
      ))}
  </div>
  )
}

export default Post