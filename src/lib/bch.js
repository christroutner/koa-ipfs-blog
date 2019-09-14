/*
  This library contains the application logic for working with the BCH blockchain
  and decoding memo.cash protocol messages from BCH transactions.
*/

'use strict'

// const shell = require('shelljs')

const config = require('../../config')

const BITBOX = new config.BCHLIB({ restURL: config.MAINNET_REST })

const ADDR = config.BCHADDR

class BCH {
  constructor (hash) {
    // By default make hash an empty string.
    this.currentHash = ''

    // If user specified a hash to use, use that.
    if (hash && hash !== '') this.currentHash = hash
  }

  // Checks to see if a new hash been published to the BCH network. If a new
  // hash is detected, it returns the hash. Otherwise, it returns false.
  async checkForUpdates () {
    const hash = await this.findHash()

    // Handle initializing the server.
    if (this.currentHash === '') this.currentHash = hash

    // If new hash is detected.
    if (hash !== this.currentHash) {
      this.currentHash = hash

      return hash
    }

    return false
  }

  // Walk the transactions associated with an address until a proper IPFS hash is
  // found. If one is not found, will return false.
  async findHash () {
    try {
      // Get details associated with this apps BCH address.
      const details = await BITBOX.Address.details(ADDR)
      console.log(`Retrieving transaction history for BCH address ${ADDR}`)

      // Extract the list of transaction IDs involving this address.
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

          const msg = this.decodeTransaction(asm)
          if (msg) {
            // console.log(`msg: ${msg}`)

            const hash = this.filterHash(msg)
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
  filterHash (msg) {
    try {
      if (msg.indexOf('IPFS UPDATE') > -1) {
        const parts = msg.split(' ')
        const hash = parts.pop()

        if (hash.length === 46) {
          return hash
        }

        return false
      }
    } catch (err) {
      // Exit silently
      return false
    }
  }

  // Decodes BCH transaction assembly code. If it matches the memo.cash
  // protocol for posts, it returns the post message. Otherwise returns false.
  decodeTransaction (asm) {
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
}

module.exports = BCH
