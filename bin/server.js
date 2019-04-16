/*
  This webserver is intended to be used with this memo-push publishing tool:
  https://github.com/christroutner/memo-push
*/

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const convert = require('koa-convert')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const session = require('koa-generic-session')
const passport = require('koa-passport')
const mount = require('koa-mount')
const serve = require('koa-static')
const cors = require('kcors')
const shell = require('shelljs')

const config = require('../config')
const errorMiddleware = require('../src/middleware')

// Used for debugging and iterrogating JS objects.
const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

const BITBOXSDK = require('bitbox-sdk')
const BITBOX = new BITBOXSDK()

const ADDR = `bitcoincash:qq34qnz6527rp2szzkull8dzrkmmrnlfuq4ua74spq`
// const ADDR = `bitcoincash:qq34qnz6527rp2szzkull8dzrkmmrnlfuq4ua74spa`

async function startServer () {
  // Create a Koa instance.
  const app = new Koa()
  app.keys = [config.session]

  // Connect to the Mongo Database.
  mongoose.Promise = global.Promise
  mongoose.set('useCreateIndex', true) // Stop deprecation warning.
  await mongoose.connect(
    config.database,
    { useNewUrlParser: true }
  )

  // MIDDLEWARE START

  app.use(convert(logger()))
  app.use(bodyParser())
  app.use(session())
  app.use(errorMiddleware())

  // Used to generate the docs.
  app.use(convert(mount('/docs', serve(`${process.cwd()}/docs`))))

  // User Authentication
  require('../config/passport')
  app.use(passport.initialize())
  app.use(passport.session())

  // Custom Middleware Modules
  const modules = require('../src/modules')
  modules(app)

  // Enable CORS for testing
  // THIS IS A SECURITY RISK. COMMENT OUT FOR PRODUCTION
  app.use(cors({ origin: '*' }))

  // MIDDLEWARE END

  const hash = await findHash()
  if (!hash) {
    console.log(`Could not find IPFS hash associated with BCH address ${ADDR}`)
    console.log(`Publish an IPFS hash using the memo-push tool before running this server.`)
    console.log(`Exiting`)
    process.exit()
  }

  console.log(`Retrieving and serving this IPFS hash: ${hash}`)

  shell.cd(`ipfs-data`)
  // console.log(shell.pwd())
  // const hash = `QmQ3J6yb21ipeE96hYBtQVPyiZney6dqbGNHe7gN4vxMbk`
  shell.exec(`ipfs get ${hash}`)
  app.use(convert(mount('/', serve(`${process.cwd()}/${hash}`))))

  // app.listen(config.port, () => {
  //  console.log(`Server started on ${config.port}`)
  // })
  await app.listen(config.port)
  console.log(`Server started on ${config.port}`)
  console.log(`Access website at http://localhost:5000/`)

  return app
}
// startServer()

// Walk the transactions associated with an address until a proper IPFS hash is
// found. If one is not found, will return false.
async function findHash () {
  try {
    const details = await BITBOX.Address.details(ADDR)

    const TXIDs = details.transactions
    // console.log(`TXIDs: ${JSON.stringify(TXIDs, null, 2)}`)

    // Loop through each transaction associated with this address.
    for (let i = 0; i < TXIDs.length; i++) {
      const thisTXID = TXIDs[i]

      const thisTx = await BITBOX.RawTransactions.getRawTransaction(
        thisTXID,
        true
      )
      // console.log(`thisTx: ${JSON.stringify(thisTx, null, 2)}`)

      // Loop through all the vout entries.
      for (let j = 0; j < thisTx.vout.length; j++) {
        const thisVout = thisTx.vout[j]

        // Assembly representation.
        const asm = thisVout.scriptPubKey.asm
        // console.log(`asm: ${asm}`)

        const msg = decodeTransaction(asm)
        if (msg) {
          // console.log(`msg: ${msg}`)

          const hash = filterHash(msg)
          if (hash) {
            // console.log(`Hash found! ${hash}`)
            return hash
          }
        }
      }
    }
    return false
  } catch (err) {
    console.log(`Could not find IPFS hash in transaction history.`)
    return false
  }
}

// Filters a string to see if it matches the proper pattern of:
// 'IPFS UPDATE <hash>'
// Returns the hash if the pattern matches. Otherwise, returns false.
function filterHash (msg) {
  try {
    if (msg.indexOf('IPFS UPDATE') > -1) {
      const parts = msg.split(' ')
      const hash = parts.pop()

      if (hash.length === 46) { return hash }

      return false
    }
  } catch (err) {
  // Exit silently
    return false
  }
}

// Decodes BCH transaction assembly code. If it matches the memo.cash
// protocol for posts, it returns the post message. Otherwise returns false.
function decodeTransaction (asm) {
  try {
    // Decode the assembly into a string.
    let fromASM = BITBOX.Script.fromASM(asm)
    let decodedArr = BITBOX.Script.decode(fromASM).toString()
    // console.log(`decodedArr: ${util.inspect(decodedArr)}`)

    // Split the string based on commas.
    const splitStr = decodedArr.split(',')

    // Detect OP_RETURN & Memo Cash message
    if (splitStr[0] === '106' && splitStr[1] === 'b') {
      // console.log(`splitStr: ${JSON.stringify(splitStr, null, 2)}`)

      // Get the last element from the array.
      const endStr = splitStr.pop()
      // console.log(`endStr: ${endStr}`)

      // Return the message.
      return endStr
    }

    return false
  } catch (err) {
    // Exit quietly
    return false
  }
}

// export default app
// module.exports = app
module.exports = {
  startServer
}
