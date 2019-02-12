const env = require('./env')

const port = process.env.API_PORT || env.port

const host = process.env.API_HOST || env.host

const prefix = process.env.API_PREFIX || '/'

const origin = `http://${host}:${port}${prefix}`

console.log('Back-end:', env.dev ? 'Disabled' : origin)

module.exports = { port, host, prefix }

/**
 * @host https://axios.nuxtjs.org/options
 */