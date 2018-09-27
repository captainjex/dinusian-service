const Agenda = require('agenda');

const mongoString = process.env.MONGO_STRING || 'mongodb://127.0.0.1:27017/dinusian'
const agenda = new Agenda({ db: { address: mongoString, collection: 'agendaJobs' } });

// agenda.processEvery('10 seconds') // for testing
agenda.processEvery('1 minute')
agenda.maxConcurrency(5);
agenda.lockLimit(5);
agenda.defaultLockLimit(5);

require('../jobs/broadcastAnnouncement')(agenda);

(async function () { // IIFE to give access to async/await
  await agenda.start();

  await agenda.every('5 9,12,18 * * *', 'broadcast announcement', {}, { timezone: 'Asia/Jakarta' });
})();

module.exports = agenda;
