const { send } = require('micro')

module.exports = (_, res) => send(res, 500)
