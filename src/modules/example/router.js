// import * as auth from './controller'
const example = require('./controller')

// export const baseUrl = '/auth'
module.exports.baseUrl = '/example'

// export default [
module.exports.routes = [
  {
    method: 'GET',
    route: '/',
    handlers: [
      example.get
    ]
  }

]
