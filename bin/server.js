/*
  This webserver is intended to be used with this memo-push publishing tool:
  https://github.com/christroutner/memo-push
*/

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const convert = require('koa-convert')
const logger = require('koa-logger')
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

  // MIDDLEWARE START

  app.use(convert(logger()))
  app.use(bodyParser())
  app.use(errorMiddleware())

  // Custom Middleware Modules
  const modules = require('../src/modules')
  modules(app)

  // Enable CORS for testing
  // THIS IS A SECURITY RISK. COMMENT OUT FOR PRODUCTION
  app.use(cors({ origin: '*' }))

  // MIDDLEWARE END

  // Retrieve hash from BCH network and retrieve data from IPFS.

  // Get the latest hash off the BCH network.
  const hash = await bch.findHash()

  // Exit if no hash is found.
  if (!hash) {
    console.log(`Could not find IPFS hash associated with BCH address ${config.BCHADDR}`)
    console.log(`Publish an IPFS hash using the memo-push tool before running this server.`)
    console.log(`Exiting`)
    process.exit()
  }

  console.log(`Retrieving and serving this IPFS hash: ${hash}`)

  // Get the content from the IPFS network.
  shell.cd(`ipfs-data`)
  shell.exec(`ipfs get ${hash}`)
  shell.exec(`ipfs pin add ${hash}`)

  // Mount the downloaded directory and serve it.
  app.use(convert(mount('/', serve(`${process.cwd()}/${hash}`))))

  await app.listen(config.port)
  console.log(`Server started on ${config.port}`)
  console.log(`Access website at http://localhost:${config.port}/`)

  return app
}
// startServer()

module.exports = {
  startServer
}
