import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import fetchUsers from './fetchUsers'
import LoadingPage from '../../shared/LoadingPage'

const mapState = (state) => ({
  users: state.users,
})

const mapDispatch = (dispatch) => ({
  fetchUsers(url) {
    dispatch(fetchUsers.action(url))
  },
})

const mergeProps = (mappedState, mappedDispatchers, props) => ({
  ...props,
  ...mappedState,
  ...mappedDispatchers,
  fetchMoreUsers() {
    mappedDispatchers.fetchUsers(mappedState.users.links.next)
  }
})

const withUsers = (Wrappee) => {

  class WithUsers extends Component {

    componentDidMount() {

      const fetchNeeded = (
        !this.props.users.entries.length ||
        this.props.users.endpoint !== '/users'
      )
      if(fetchNeeded) {
        this.props.fetchUsers()
      }
    }

    render() {
      const {props: {users}} = this

      if(users.loading) {
        return <LoadingPage title='Loading users...' />
      }
      if(users.error) {
        return <pre>
          {JSON.stringify(users.error, null, 2)}
        </pre>
      }

      return <Wrappee
        {...this.props}
        links={users.links}
        users={users.entries}

      />
    }

  }

  WithUsers.propTypes = {
    users: PropTypes.object.isRequired,
    fetchUsers: PropTypes.func.isRequired,
  }

  return connect(mapState, mapDispatch, mergeProps)(WithUsers)
}

export default withUsers