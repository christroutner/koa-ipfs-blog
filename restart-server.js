/*
  Restarts the web server if a new hash is published to the BCH blockchain.
*/

'use strict'

const shell = require('shelljs')
const kill = require('tree-kill')

// App specific libraries.
// const config = require('./config')
const BCH = require(`./src/lib/bch`)
const bch = new BCH()

// Edit the period below, which dictates how often this app checks
// the BCH blockchain for updates.
// The time is in milliseconds (ms). 60,000 ms = 1 minute
const PERIOD = 60000 * 0.5

// Used for debugging and iterrogating JS objects.
const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

// Start the IPFS blog web server. Restart it if a new hash is published to the
// BCH network.
async function manageServer () {
  try {
    // Start the web server.
    const server = shell.exec('node index.js', { async: true })
    let pid = server.pid
    // console.log(`server : ${util.inspect(server)}`)
    // console.log(`pid: ${server.pid}`)

    setInterval(async function () {
      console.log(`Checking for updates...`)

      // Check for updates. Will usually return false.
      const hash = await bch.checkForUpdates(pid)

      // If a hash is returned, then restart the web server.
      if (hash) {
        console.log(`New content published with hash ${hash}`)
        console.log('Restarting server...')
        kill(pid)

        await sleep(5000)

        const server = shell.exec('node index.js', { async: true })
        pid = server.pid
      }
    }, PERIOD)
  } catch (err) {
    console.error(err)
  }
}
manageServer()

// Promise based sleep function:
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
