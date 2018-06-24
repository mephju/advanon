import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserMainPage extends Component {
  render() {
    return <div>
      <h1> muy app </h1>
      {this.props.children}
    </div>
  }
}

UserMainPage.propTypes = {
  children: PropTypes.node.isRequired,
}
export default UserMainPage
