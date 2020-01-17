const axios = require('axios');
const cheerio = require('cheerio');

async function getBirthdayData() {
  const {
    data: body
  } = await axios.get('https://dinus.ac.id/student');

  const $ = cheerio.load(body);
  const birthdayData = [];

  $('#tableDataultah > tbody > tr').each(function () {
    const name = $(this).find('td .ultah').attr('data-nama');
    const nim = $(this).find('td .ultah').attr('data-nim');
    const age = $(this).find('td .ultah').attr('data-usia');
    const photoUrl = $(this).find('td .ultah').attr('data-foto');

    birthdayData.push({ name, nim, age, photoUrl });
  });

  return birthdayData;
}

module.exports = {
  getBirthdayData
};
