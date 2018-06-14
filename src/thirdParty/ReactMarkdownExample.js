import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class ReactMarkdownExample extends Component {
  render () {
    const {input} = this.props
    const disallowed = ['image']
    return (
      <ReactMarkdown className='cfe-markdown' source={input} disallowedTypes={disallowed} />
    )
  }
}

export default ReactMarkdownExample
