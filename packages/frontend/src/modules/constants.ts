const backendUrl: string =
  process.env.REACT_BACKEND_HOST && process.env.REACT_BACKEND_PORT
    ? `http://${process.env.REACT_BACKEND_HOST}:${process.env.REACT_BACKEND_PORT}`
    : 'http://localhost:4000'
export default {
  BACKEND_URL: backendUrl,

  GRAPHQL_BACKEND_URL: `${backendUrl}/graphql`,

  COLOUR_ENDPOINT: `${backendUrl}/colour`,

  PATH_ROOT: '/',

  COPYRIGHT_TEXT: 'Copyright © ',
  COPYRIGHT_LINK: 'https://www.linkedin.com/in/abasallo/',
  COPYRIGHT_LINK_TEXT: 'alvaro@basallo.es',

  LOGO_ALT: 'Logo',

  LOGOUT: 'Logout',
}
