import React, { Component } from 'react'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    this.titleWasClicked = this.titleWasClicked.bind(this)
  }
  titleWasClicked (event) {
    event.preventDefault()
    const {dataCallback} = this.props
    // console.log(dataCallback)
    if (dataCallback !== undefined) {
      dataCallback('hello world!')
    }
    //
  }
  render () {
    const {post} = this.props
    return (
      <div>
        <h1 onClick={this.titleWasClicked}>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default PostDetail
