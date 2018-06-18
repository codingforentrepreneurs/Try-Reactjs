import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class DynamicRouteComp extends Component {
  componentDidMount () {
    const { slug } = this.props.match.params

    // this.performLookup(slug) //grabing data from your api

    // const { history } = this.props
    // const supportsHistory = 'pushState' in window.history
    // if (supportsHistory) {
    //   history.pushState(null, '/not-found')
    // } else {
    //   window.location = '/dashboard'
    // }
  }

  render () {
    const { slug } = this.props.match.params
    return (
      <div>
        <h1>{slug} that changes based on route</h1>
        <Link className='some-link' to='/about/'>Static Page</Link>
      </div>
    )
  }
}

export default DynamicRouteComp
