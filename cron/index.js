const Agenda = require('agenda');

const broadcastAnnouncement = require('./broadcastAnnouncement');

const mongoString = process.env.MONGO_STRING || 'mongodb://127.0.0.1:27017/dinusian';
const agenda = new Agenda({ db: { address: mongoString, collection: 'agendaJobs' } });

// agenda.processEvery('10 seconds') // for testing
agenda.processEvery('1 minute');
agenda.maxConcurrency(5);
agenda.lockLimit(5);
agenda.defaultLockLimit(5);


agenda.define('broadcast announcement', broadcastAnnouncement);

agenda.start().then(() => {
  agenda.every('5 8,11,14,17,20 * * *', 'broadcast announcement', {}, { timezone: 'Asia/Jakarta' });
});

module.exports = agenda;
