import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class PostSorting extends Component {
  constructor (props) {
    super(props)
    this.toggleListReverse = this.toggleListReverse.bind(this)
    this.state = {
      postList: []
    }
  }

  toggleListReverse (event) {
    const {postList} = this.state
    let newPostList = postList.reverse()
    this.setState({
      postList: newPostList
    })
  }
  componentDidMount () {
    this.setState({
      postList: PostData
    })
  }
  render () {
    const {postList} = this.state
    return (
      <div >
        <h1>Hello There</h1>
        <button onClick={this.toggleListReverse}>Reverse Order</button>
        {postList.map((item, index) => {
          return <PostDetail
            post={item}
            key={`post-list-key ${index}`}
            didHandleRemove={this.handlePostRemove}
            dataCallback={this.handleDataCallback} />
        })}
      </div>
    )
  }
}

export default PostSorting
