import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import fetchUser from './fetchUser'
import LoadingPage from '../../shared/LoadingPage'

const mapState = (state, props) => ({
  users: state.users,
  user: state.users.entries.find(
    u => u.name === props.match.params.name
  ),
})

const mapDispatch = (dispatch, props) => ({
  fetchUser() {
    dispatch(fetchUser.action(props.match.params.name))
  }
})

const withUser = (Wrappee) => {

  class WithUser extends Component {

    constructor(props) {
      super(props)

      if(!this.props.user) {
        this.props.fetchUser()
      }
    }

    render() {
      const {props: {users, user}} = this

      if(users.error) {
        return <pre>
          {JSON.stringify(users.error, null, 2)}
        </pre>
      }

      const {name} = this.props.match.params

      if(users.loading || !user) {
        return <LoadingPage title={`Loading user ${name} `} />
      }

      return <Wrappee
        {...this.props}
        user={user}
      />
    }

  }

  WithUser.propTypes = {
    users: PropTypes.object.isRequired,
    user: PropTypes.object,
    fetchUser: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  return connect(mapState, mapDispatch)(WithUser)
}

export default withUser