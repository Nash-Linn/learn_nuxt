const encrypt = require("./encrypt");
const sms = require("./sms");

module.exports = {
  ...encrypt,
  ...sms,
};
