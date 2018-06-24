import React, { Component } from 'react'
import withUsers from './withUsers'
import PropTypes from 'prop-types'
import UserListItem from './UserListItem'
import styled from 'styled-components'
import Page from '../../shared/Page'
import Li from '../../shared/Li'
import Button from '../../shared/Button'

const MoreUsersLi = Li.extend`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 5px;
  cursor: auto;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`

class UserListPage extends Component {

  constructor(props) {
    super(props)

    this.goToUser = this.goToUser.bind(this)
  }

  goToUser(name) {
    this.props.history.push(`/users/${name}`)
  }

  render() {

    return <Page>
      <h1> User List </h1>
      <Ul>
        {this.props.users.map(user =>
          <UserListItem
            key={user.id}
            user={user}
            goToUser={this.goToUser}
          />
        )}

        <MoreUsersLi>
          <Button onClick={this.props.fetchMoreUsers}>
            Load more users
          </Button>
        </MoreUsersLi>

      </Ul>
    </Page>
  }
}

UserListPage.propTypes = {
  users: PropTypes.array.isRequired,
  fetchMoreUsers: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  links: PropTypes.object.isRequired,
}

export default withUsers(UserListPage)
