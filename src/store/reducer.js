import fetchUsers from '../users/UserListPage/fetchUsers'
import fetchUser from '../users/UserPage/fetchUser'

export const initialState = {
  users: {
    loading: false,
    error: null,
    entries: [],
    endpoint: null,
    links: {}
  }
}

const reducer = (state = initialState, action) => [
  fetchUsers,
  fetchUser,
].reduce((acc, fn) => fn.reducer(acc, action), state)


export default reducer