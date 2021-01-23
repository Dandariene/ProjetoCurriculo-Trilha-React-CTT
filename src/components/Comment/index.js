import React from 'react'

function Comment(prop) {

  const { name, avatar } = prop.comment.author

  return(
    <div className="commment">
      <div className="comment-avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="comment-inner">
        <h2>{name}</h2>
        {prop.comment.content}
      </div>
    </div>
  )
}

export default Comment