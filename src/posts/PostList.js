import React, { Component } from 'react'
import PostData from '../data/posts.json'

class PostList extends Component {
  render () {
    return (
      <div >
        <h1>Hello There</h1>
        {PostData.map((postDetail, index) => {
          return <div>
            <h1>{postDetail.title}</h1>
            <p>{postDetail.content}</p>
          </div>
        })}
      </div>
    )
  }
}

export default PostList
