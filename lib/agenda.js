const Agenda = require('agenda');

const broadcastAnnouncement = require('../jobs/broadcastAnnouncement')
const broadcastBirthday = require('../jobs/broadcastBirthday')

const mongoString = process.env.MONGO_STRING || 'mongodb://127.0.0.1:27017/dinusian'
const agenda = new Agenda({ db: { address: mongoString, collection: 'agendaJobs' } });

// agenda.processEvery('10 seconds') // for testing
agenda.processEvery('1 minute')
agenda.maxConcurrency(5);
agenda.lockLimit(5);
agenda.defaultLockLimit(5);

broadcastAnnouncement(agenda)
broadcastBirthday(agenda)

agenda.start().then(() => {
  agenda.every('5 9,12,15,18 * * *', 'broadcast announcement', {}, { timezone: 'Asia/Jakarta' });
  agenda.every('1 0 * * *', 'broadcast birthday', {}, { timezone: 'Asia/Jakarta' });
});

module.exports = agenda;
