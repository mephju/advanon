const toUser = githubUser => ({
  id: githubUser.id,
  name: githubUser.login,
  avatarUrl: githubUser.avatar_url,
  url: githubUser.url,
  htmlUrl: githubUser.html_url,

})

toUser.from = ({id, name, avatarUrl, url, htmlUrl}) => ({
  id, name, avatarUrl, url, htmlUrl,
})

export default toUser