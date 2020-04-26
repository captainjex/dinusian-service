const announcements = require('./announcements');
const birthday = require('./birthday');

module.exports = {
  ...announcements,
  ...birthday,
};
