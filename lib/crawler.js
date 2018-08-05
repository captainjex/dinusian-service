const axios = require('axios');
let Announcement = require('../models/announcement')

console.log('>> mulai crawling...');
axios.get('http://dinus.ac.id/androk/wismilak/slim/pengumuman/0/20')
  .then(function (response) {
    const data = response.data.substr(1).split(')[')
    const result = JSON.parse(data[0])
    // console.log( result);
    result.forEach(element => {
      console.log(element.id);
      Announcement.findOneAndUpdate({ announceId: element.id }, {
        announceId: element.id,
        title: element.judul,
        info: element.info,
        sender: element.sender,
        timeSent: element.waktu_kirim,
        progdi: element.progdi,
      }, {
        upsert: true
      }, function(err, doc) {
        if (err) {
          console.log('err', err);
        } else {
          if (doc) {
            console.log('berhasil update', doc.title);
          } else {
            console.log('berhasil upsert baru', element.judul);
          }
        }
      })

    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
