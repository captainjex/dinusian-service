var axios = require('axios');
var cheerio = require('cheerio');

async function getBirthdayData () {
  let {
    data: body
  } = await axios.get("https://dinus.ac.id/student")

  const $ = cheerio.load(body);
  let birthdayData = []

  $('#tableDataultah > tbody > tr').each(function () {
    const name = $(this).find('td .ultah').attr('data-nama')
    const nim = $(this).find('td .ultah').attr('data-nim')
    const age = $(this).find('td .ultah').attr('data-usia')
    const photoUrl = $(this).find('td .ultah').attr('data-foto')

    birthdayData.push({ name, nim, age, photoUrl })
  });

  return birthdayData
}

module.exports = {
  getBirthdayData
}
