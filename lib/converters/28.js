/**
 * option 28: broadcast address
 */
var sprintf = require('../../support/sprintf'),
    utils = require('../utils'),
    decode = utils.readIp,
    encode = utils.writeIp;

module.exports = {
  "encode": encode, "decode": decode
}