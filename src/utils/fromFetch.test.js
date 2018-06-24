import {parseLinkHeader} from './fromFetch'

const header = '<https://api.github.com/users?since=46>; rel="next", <https://api.github.com/users{?since}>; rel="first"'

it('properly parses github link header', () => {

  const links = parseLinkHeader(header)
  expect(links).toEqual({
    next: 'https://api.github.com/users?since=46',
    first: 'https://api.github.com/users{?since}'
  })
})

