/**
 * option 61: client identifier
 * http://tools.ietf.org/html/rfc2132#section-9.14
 */
var sprintf = require('../../support/sprintf'),
    utils = require('../utils');

module.exports = {"encode": encode, "decode": decode};

function encode(buf, num, value, offset) {
  return offset;
}

function decode(buf) {
  var s = [], type = buf[0];
  for (var j = 1; j < buf.length; j++) {
    s.push(sprintf("%02d", buf[j]));
  }
  return [type, s.join(':')];
}