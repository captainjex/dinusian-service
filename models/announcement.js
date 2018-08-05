let mongoose = require("mongoose");

let announcementSchema = new mongoose.Schema({
  announceId: String,
  title: String,
  info: String,
  sender: String,
  timeSent: String,
  progdi: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("Announcement", announcementSchema);
