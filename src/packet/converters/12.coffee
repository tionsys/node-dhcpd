###
option 12: hostname
###
sprintf = require("../../../support/sprintf")
utils = require("../../utils")
decode = utils.readString
encode = utils.writeString
module.exports =
  encode: encode
  decode: decode