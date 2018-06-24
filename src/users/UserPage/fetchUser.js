import toUser from '../toUser'

export const fetchUserStarted = 'fetchUserStarted'
export const fetchUserFailed = 'fetchUserFailed'
export const fetchUserFinished = 'fetchUserFinished'

const start = name => ({ type: fetchUserStarted, payload: {name}})
const fail = payload => ({ type: fetchUserFailed, payload })
const finish = payload => ({ type: fetchUserFinished, payload})


const action = (name) => dispatch => {

  dispatch(start(name))

  fetch(`https://api.github.com/users/${name}`)
  .then(res => res.json())
  .then(payload => dispatch(finish(payload)))
  .catch(error => dispatch(fail(error)))
}

const reactions = {
  [fetchUserStarted]: (state, action) => ({
    ...state,
    users: {
      ...state.users,
      loading: true,
      error: null,
      endpoint: `/users/${action.payload.name}`
    }
  }),
  [fetchUserFailed]: (state, action) => ({
    ...state,
    users: {
      ...state.users,
      error: action.payload,
    }
  }),
  [fetchUserFinished]: (state, action) => ({
    ...state,
    users: {
      ...state.users,
      loading: false,
      error: null,
      entries: [toUser(action.payload)],
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

