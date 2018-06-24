import fetchUsers, {fetchUsersStarted} from './fetchUsers'

import {initialState} from '../../store/reducer'

it('should update loading prop', () => {

  const state = fetchUsers.reducer(
    initialState,
    {type: fetchUsersStarted}
  )

  expect(state.users.loading).toEqual(true)

})