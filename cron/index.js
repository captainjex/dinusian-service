const Agenda = require('agenda');
const config = require('../config');
const broadcastAnnouncement = require('./broadcastAnnouncement');


const mongoString = config.MONGO_STRING;
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
