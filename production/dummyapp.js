/*
  A dummy app to keep the Docker container running so that the container can
  be debugged.
*/

'use strict'

setInterval(function () {
  const now = new Date()
  console.log(`Timestamp: ${now.toLocaleString()}`)
}, 60000)
