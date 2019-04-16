/*
  Restarts the web server if a new hash is published.
*/

'use strict'

const shell = require('shelljs')
const kill = require('tree-kill')

const config = require('./config')

// Edit the period below, which dictates how often this app checks
// the BCH blockchain for updates.
// The time is in milliseconds (ms). 60,000 ms = 1 minute
const PERIOD = 60000 * 0.5

// Used for debugging and iterrogating JS objects.
const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

// Start the web server.
const server = shell.exec('node index.js', { async: true })
const pid = server.pid
// console.log(`server : ${util.inspect(server)}`)
// console.log(`pid: ${server.pid}`)

setTimeout(function () {
  console.log('killing...')
  // server.kill('SIGINT')
  // shell.exec(`kill ${server.pid}`)
  kill(server.pid)
}, PERIOD)
