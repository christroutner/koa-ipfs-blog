const common = require('./env/common')
const infrastructure = require('./bch-infrastructure')

const env = process.env.KOA_ENV || 'development'
const config = require(`./env/${env}`)

module.exports = Object.assign({}, common, infrastructure, config)
