import React, {Fragment} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import UserListPage from './users/UserListPage/UserListPage'
import UserPage from './users/UserPage/UserPage'

const Routes = () => {

  return <Router>
    <Fragment>
      {window.location.pathname === '/' && <Redirect to='/users' /> }
      <Route path='/users/:name' component={UserPage} />
      <Route exact path='/users' component={UserListPage} />
    </Fragment>
  </Router>
}

export default Routes