const Agenda = require('agenda');

const mongoString = process.env.MONGO_STRING || 'mongodb://127.0.0.1:27017/dinusian'
const agenda = new Agenda({ db: { address: mongoString, collection: 'agendaJobs' } });

// agenda.processEvery('10 seconds') // for testing
agenda.processEvery('1 minute')
agenda.maxConcurrency(5);
agenda.lockLimit(5);
agenda.defaultLockLimit(5);

require('../jobs/getAnnouncement')(agenda);

(async function () { // IIFE to give access to async/await
  await agenda.start();

  await agenda.every('0 6,18 * * *', 'get announcement', {}, { timezone: 'Asia/Jakarta' });
})();

module.exports = agenda;
