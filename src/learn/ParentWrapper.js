import React, {Component} from 'react'

// class ParentWrapper extends Component {
//   render () {
//     const {alertType} = this.props
//     return <div className={'alert alert-' + alertType}>{this.props.children}</div>
//   }
// }

function AlertBox (props) {
  return <div className={'alert alert-' + props.alertType}>{props.children}</div>
}

function WelcomeHereDialog () {
  return <AlertBox alertType='success'><h1>Some new content</h1></AlertBox>
}

class SubItem extends Component {
  render () {
    return <AlertBox alertType='success'><h1>Some new content</h1></AlertBox>
  }
}

export {AlertBox, SubItem}
export default WelcomeHereDialog
