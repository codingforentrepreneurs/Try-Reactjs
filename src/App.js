import React, { Component } from 'react'
// import PostSorting from './posts/PostSorting'
import Timer from './learn/Timer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Timer startCount='1000' />
      </div>
    )
  }
}

export default App
