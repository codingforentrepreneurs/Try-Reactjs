import React, { Component } from 'react'
// import PostSorting from './posts/PostSorting'
import './App.css'

import WelcomeHereDialog, {AlertBox, SubItem} from './learn/ParentWrapper'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AlertBox alertType='danger'>I think this is working...</AlertBox>
        <WelcomeHereDialog />
      </div>
    )
  }
}

export default App
