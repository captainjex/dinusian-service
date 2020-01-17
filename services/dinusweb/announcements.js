/* eslint-disable max-len */
const axios = require('axios');
const cheerio = require('cheerio');


async function getAnnouncements() {
  const { data: body } = await axios.get('https://dinus.ac.id/student');
  const $ = cheerio.load(body);

  const elements = $('.ac-over > ul > li').toArray();
  const announcements = elements.map((el) => {
    const rawUrl = el.children.find(c => c.type === 'tag' && c.name === 'a').attribs.href;
    const rawId = rawUrl.split('/')[4];
    const titleEl = el.children.find(c => c.type === 'tag' && c.name === 'a').firstChild;
    const footer = el.children.find(c => c.type === 'tag' && c.name === 'p').firstChild.data;
    const createdBy = footer.split('||')[0].split(' : ')[1];

    const title = titleEl.data || titleEl.firstChild.data; // sometimes it wrapped in <b> so we need to get the firstChild first

    return { title, createdBy, rawUrl, rawId };
  });

  return announcements;
}

async function getContentAnnouncement(url) {
  const { data: body } = await axios.get(url);
  const $ = cheerio.load(body);

  const element = $('.container .col-md-12');
  element.each(function () {
    $(this).find('div').removeAttr('style');
    $(this).find('p').removeAttr('style');
    $(this).find('h2').removeAttr('style');
  });
  return element.html();
}


module.exports = {
  getAnnouncements,
  getContentAnnouncement,
};
