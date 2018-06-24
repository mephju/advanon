const looseFirstAndLastChar = text => text.substring(1, text.length - 1)
const extractRelName = rel => rel.substring(5, rel.length - 1)

export const parseLinkHeader = (header = '') => {
  return header
  .split(', ')
  .map(part => part.split('; '))
  .map(([link, rel]) => [
    looseFirstAndLastChar(link),
    extractRelName(rel)
  ])
  .reduce((acc, [link, rel]) => ({
    ...acc,
    [rel]: link
  }), {})
}

const fromFetch = res => {
  const linkHeader = res.headers.get('Link')
  const links = parseLinkHeader(linkHeader)
  return res.json().then(payload => ({payload, links, res}))
}

export default fromFetch