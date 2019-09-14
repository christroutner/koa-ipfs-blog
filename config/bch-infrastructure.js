/*
  This config file contains settings shared across files.

  Toolset and REST API can be selected with this file, or by setting the RESTAPI
  environment variable. By default, Bitcoin.com's infrastructure is used.

  You can run your own infrastructure. See bchjs.cash for details.
*/

'use strict'

// By default choose a local rest API.
let RESTAPI = 'rest.bitcoin.com'

// Override the RESTAPI setting if envronment variable is set.
if (process.env.RESTAPI && process.env.RESTAPI !== '') { RESTAPI = process.env.RESTAPI }

// Ensure bch-js can pick up the env var.
process.env.RESTAPI = RESTAPI

const BCHJS = require('@chris.troutner/bch-js')

const config = {}

// Use bch-js but use it with the bitcoin.com infrastructure.
if (RESTAPI === 'rest.bitcoin.com') {
  config.BCHLIB = BCHJS.BitboxShim()
  config.MAINNET_REST = `https://rest.bitcoin.com/v2/`
  config.TESTNET_REST = `http://157.245.141.224:3000/v2/`
  config.RESTAPI = 'rest.bitcoin.com'
}

// Use bch-js with local infrastructure.
if (RESTAPI === 'local') {
  config.BCHLIB = BCHJS.BitboxShim()
  // config.MAINNET_REST = `http://192.168.0.36:12400/v3/`
  // config.TESTNET_REST = `http://192.168.0.38:13400/v3/`
  config.MAINNET_REST = `http://127.0.0.1:3000/v3/`
  config.TESTNET_REST = `http://decatur.hopto.org:13400/v3/`
  config.RESTAPI = 'local'
}

// Use bch-js with decatur infrastructure.
if (RESTAPI === 'decatur') {
  config.BCHLIB = BCHJS.BitboxShim()
  config.MAINNET_REST = `http://decatur.hopto.org:12400/v3/`
  config.TESTNET_REST = `http://decatur.hopto.org:13400/v3/`
  config.RESTAPI = 'decatur'
}

module.exports = config
