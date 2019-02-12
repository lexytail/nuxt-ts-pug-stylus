const test = process.env.NODE_ENV === 'test'

const dev = !test && (process.env.NODE_ENV !== 'production')

const host = process.env.HOST | 'localhost'

const port = process.env.PORT | '3000'

module.exports = { dev, host, port, test }
