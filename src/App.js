import React, { Component } from 'react'
// import PostList from './posts/PostList'

import ReactMarkdownExample from './thirdParty/ReactMarkdownExample'

import './App.css'

class App extends Component {
  render () {
    const input = '<h1>Hello Wolrd</h1>\n\n # [This](http://joincfe.com/youtube/) is a header\n\nAnd this is a paragraph http://joincfe.com/youtube/'
    return (
      <div className='App'>
        <ReactMarkdownExample input={input} />
      </div>
    )
  }
}

export default App
