const scrapAnnouncement = require('../cron/scrapAnnouncement');
const config = require('../config');

module.exports = (req, res) => {
  const isValidKey = req.query.key === config.WEBHOOK_KEY;
  if (!isValidKey) {
    return res.send({
      error: true,
      message: `INVALID KEY : ${req.query.key}`
    });
  }

  switch (req.query.action) {
    case 'SCRAP:ANNOUNCEMENTS':
      scrapAnnouncement(null, (error) => {
        if (error) {
          return res.status(500).send({
            error: true,
            message: error.message,
            data: error
          });
        }

        return res.send({
          error: false,
          message: 'success'
        });
      });
      break;
    default:
      return res.send({
        error: true,
        message: `ACTION NOT RECOGNIZED : ${req.query.action}`
      });
  }
};
