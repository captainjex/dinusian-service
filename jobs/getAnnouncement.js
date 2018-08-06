const axios = require('axios');
const Announcement = require('../models/announcement')
const bot = require('../lib/telegramBot')
const broadcastChannel = require('../chat/broadcastChannel')

const announcementSize = 20

module.exports = function (agenda) {
  agenda.define('get announcement', (job, done) => {
    console.log('>> mulai crawling...');
    axios.get(process.env.URL_ANNOUNCEMENT + '/0/' + announcementSize)
      .then(function (response) {
        const data = response.data.substr(1).split(')[')
        const result = JSON.parse(data[0])
        result.forEach(element => {
          Announcement.findOneAndUpdate({ announceId: element.id }, {
            announceId: element.id,
            title: element.judul,
            info: element.info,
            sender: element.sender,
            timeSent: element.waktu_kirim,
            progdi: element.progdi,
          }, {
              upsert: true
            }, function (err, doc) {
              if (err) {
                console.log('err', err);
              } else {
                if (doc) {
                  console.log('berhasil update', doc.title);
                } else {
                  let message = 'Pengumuman Baru :\n' + element.judul + '\nCek siadin bro..'
                  broadcastChannel(bot, message)
                  console.log('berhasil upsert baru', element.judul);
                }
              }
            })
        });
        done()
      })
      .catch(function (error) {
        console.log(error);
        done(error)
      })
  })
}
