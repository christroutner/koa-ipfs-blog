/*
  This webserver is intended to be used with this memo-push publishing tool:
  https://github.com/christroutner/memo-push
*/

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const convert = require('koa-convert')
const logger = require('koa-logger')
const session = require('koa-generic-session')

const mount = require('koa-mount')
const serve = require('koa-static')
const cors = require('kcors')
const shell = require('shelljs')

// App specific libraries.
const config = require('../config')
const errorMiddleware = require('../src/middleware')
const BCH = require(`../src/lib/bch`)
const bch = new BCH()

// Used for debugging and iterrogating JS objects.
const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

async function startServer () {
  // Create a Koa instance.
  const app = new Koa()
  app.keys = [config.session]

  // MIDDLEWARE START

  app.use(convert(logger()))
  app.use(bodyParser())
  app.use(session())
  app.use(errorMiddleware())

  // Used to generate the docs.
  app.use(convert(mount('/docs', serve(`${process.cwd()}/docs`))))

  // Custom Middleware Modules
  const modules = require('../src/modules')
  modules(app)

  // Enable CORS for testing
  // THIS IS A SECURITY RISK. COMMENT OUT FOR PRODUCTION
  app.use(cors({ origin: '*' }))

  // MIDDLEWARE END

  const hash = await bch.findHash()
  if (!hash) {
    console.log(`Could not find IPFS hash associated with BCH address ${config.BCHADDR}`)
    console.log(`Publish an IPFS hash using the memo-push tool before running this server.`)
    console.log(`Exiting`)
    process.exit()
  }

  console.log(`Retrieving and serving this IPFS hash: ${hash}`)

  // Get the content from the IPFS network and serve it.
  shell.cd(`ipfs-data`)
  // console.log(shell.pwd())
  // const hash = `QmQ3J6yb21ipeE96hYBtQVPyiZney6dqbGNHe7gN4vxMbk`
  shell.exec(`ipfs get ${hash}`)
  shell.exec(`ipfs pin add ${hash}`)
  app.use(convert(mount('/', serve(`${process.cwd()}/${hash}`))))

  // app.listen(config.port, () => {
  //  console.log(`Server started on ${config.port}`)
  // })
  await app.listen(config.port)
  console.log(`Server started on ${config.port}`)
  console.log(`Access website at http://localhost:${config.port}/`)

  return app
}
// startServer()

// export default app
// module.exports = app
module.exports = {
  startServer
}
