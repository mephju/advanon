import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../shared/Avatar'
import Li from '../../shared/Li'

class UserListItem extends Component {

  constructor(props) {
    super(props)

    this.goToUser = this.goToUser.bind(this)
  }

  goToUser() {
    this.props.goToUser(this.props.user.name)
  }

  render() {

    const {user} = this.props

    return <Li onClick={this.goToUser}>
      <Avatar src={user.avatarUrl} />
      {user.name}

    </Li>
  }
}

UserListItem.propTypes = {
  user: PropTypes.object.isRequired,
  goToUser: PropTypes.func.isRequired,
}

export default UserListItem
