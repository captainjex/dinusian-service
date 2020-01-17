const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  content: String,
  title: String,
  createdBy: String,
  rawUrl: String,
  rawId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Announcement', announcementSchema);
