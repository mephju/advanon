import React, { Component } from 'react'
import withUser from './withUser'
import PropTypes from 'prop-types'
import Avatar from '../../shared/Avatar'
import styled from 'styled-components'
import Page from '../../shared/Page'
import Button from '../../shared/Button'


const Row = styled.div`
  display: flex;
`


const Content = styled.div`
  flex-grow: 1;
`

class UserPage extends Component {

  render() {
    console.log('User', this.props.user)

    const {user} = this.props

    return <Page>
    <h1> User {user.id} </h1>
    <Row>

      <Avatar src={user.avatarUrl} />
      <Content>
        <h2> {this.props.user.name} </h2>
        <a href={user.htmlUrl}> {user.htmlUrl} </a>

      </Content>

      <Button onClick={this.props.history.goBack}> Go to User List </Button>

    </Row>


  </Page>
  }
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired,
}

export default withUser(UserPage)
