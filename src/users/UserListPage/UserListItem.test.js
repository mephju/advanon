import React from 'react'
import UserListItem from './UserListItem'
import { shallow } from 'enzyme'
import toUser from '../toUser'
import Avatar from '../../shared/Avatar'

const user = toUser.from({
  id: 'aaabbb',
  name: 'testuser',
  avatarUrl: 'https://avatars0.githubusercontent.com/u/1?v=4',
  url: 'https://github.com/mojombo',
  htmlUrl: 'https://github.com/mojombo',
})

it('renders UserListItem with avatar and name', () => {
  const item = shallow(
    <UserListItem
      user={user}
      goToUser={(name) => name}
    />
  )

  expect(item.contains(
    <Avatar src={user.avatarUrl} />
  )).toEqual(true)

  expect(item.contains(user.name)).toEqual(true)

  // const div = document.createElement('div')
  // ReactDOM.render(<App />, div)
  // ReactDOM.unmountComponentAtNode(div)
})