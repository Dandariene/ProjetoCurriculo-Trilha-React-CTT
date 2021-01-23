import React from 'react'
import Post from '../Post'

function PostList(prop) {

  const { posts } = prop.resposta

  return (
    <div className="post-list">
      {posts.map(item => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  )
}

export default PostList