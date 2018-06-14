import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class PostList extends Component {
  constructor (props) {
    super(props)
    this.handleDataCallback = this.handleDataCallback.bind(this)
  }
  handleDataCallback (postItem) {
    // alert(txtMsg)
    console.log(postItem)
  }
  render () {
    return (
      <div >
        <h1>Hello There</h1>
        {PostData.map((item, index) => {
          return <PostDetail
            post={item}
            key={`post-list-key ${index}`}
            dataCallback={this.handleDataCallback} />
        })}
      </div>
    )
  }
}

export default PostList
