import React, { Component } from 'react'

class ConstLetVar extends Component {
  constructor (props) {
    super(props)
    let someVar = 'hello there'
    if (someVar == 'hello there') {
      someVar = 'Hello there again.'
    }

    // var someVar2 = 'method'

    console.log(someVar)
  }
  render () {
    // someVar = 'Hello there again.'
    console.log(someVar2)
    return (
      <h1>Hello World</h1>
    )
  }
}

export default ConstLetVar
