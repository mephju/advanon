import toUser from '../toUser'
import fromFetch from '../../utils/fromFetch'

export const fetchUsersStarted = 'fetchUsersStarted'
export const fetchUsersFailed = 'fetchUsersFailed'
export const fetchUsersFinished = 'fetchUsersFinished'

const start = { type: fetchUsersStarted }
const fail = (payload) => ({ type: fetchUsersFailed, payload })
const finish = (payload) => ({ type: fetchUsersFinished, payload})

const action = (url = 'https://api.github.com/users') => dispatch => {

  dispatch(start)

  fetch(url)
  .then(fromFetch)
  .then(payload => setTimeout(() => dispatch(finish(payload)), 500)) //demonstration purpose
  .catch(error => dispatch(fail(error)))
}

const reactions = {
  [fetchUsersStarted]: (state) => ({
    ...state,
    users: {
      ...state.users,
      loading: true,
      error: null,
      endpoint: '/users'
    }
  }),
  [fetchUsersFailed]: (state, action) => ({
    ...state,
    users: {
      ...state.users,
      error: action.payload,
    }
  }),
  [fetchUsersFinished]: (state, action) => ({
    ...state,
    users: {
      ...state.users,
      loading: false,
      error: null,
      entries: action.payload.payload.map(toUser),
      links: action.payload.links
    }
  })
}

const reducer = (state, action) => {
  return reactions[action.type]
  ? reactions[action.type](state, action)
  : state
}

const fetchUsers = {
  reducer,
  action,

}

export default fetchUsers

