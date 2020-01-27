const Agenda = require('agenda');
const config = require('../config');
const scrapAnnouncement = require('./scrapAnnouncement');
const randomQuote = require('./randomQuote');


const mongoString = config.MONGO_STRING;
const agenda = new Agenda({ db: { address: mongoString, collection: 'agendaJobs' } });

// agenda.processEvery('10 seconds') // for testing
agenda.processEvery('1 minute');
agenda.maxConcurrency(5);
agenda.lockLimit(5);
agenda.defaultLockLimit(5);


agenda.define('scrap announcement', scrapAnnouncement);
agenda.define('random quote', randomQuote);

agenda.start().then(() => {
  // agenda.now('scrap announcement'); // uncomment for local development only
  agenda.every('5 20 * * *', 'random quote', {}, { timezone: 'Asia/Jakarta' });
  agenda.every('5 8,11,14,17,20 * * *', 'scrap announcement', {}, { timezone: 'Asia/Jakarta' });
});

module.exports = agenda;
