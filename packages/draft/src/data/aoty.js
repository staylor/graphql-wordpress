const puppeteer = require('puppeteer');

/* eslint-disable no-console */

const START_YEAR = 2001;
const END_YEAR = 2001;
// const PER_PAGE = 25;
const START_PAGE = 1;
const END_PAGE = 16;

(async () => {
  const browser = await puppeteer.launch({ timeout: 0 });

  const baseUrl = 'http://www.albumoftheyear.org/ratings/6-highest-rated';
  const pages = [];
  const years = {};

  const fetchPage = async (year, pagenum) => {
    const page = await browser.newPage();
    const pageUrl = `${baseUrl}/${year}/${pagenum}`;
    console.log(pageUrl);
    try {
      await page.goto(pageUrl);

      const rankings = await page.evaluate(() => {
        const items = document.querySelectorAll('.albumListTitle');
        return Array.from(items).map(item => {
          const rank = parseInt(
            item.querySelector('.albumListRank').innerText.replace(/[^0-9]/g, ''),
            10
          );
          const album = item.querySelector('a').innerText;
          return { rank, album };
        });
      });

      if (!years[year]) {
        years[year] = [];
      }
      years[year] = years[year].concat(rankings);
    } catch (e) {
      console.log(e);
    }

    await page.close();

    return Promise.resolve();
  };

  for (let year = START_YEAR; year < END_YEAR + 1; year += 1) {
    for (let pagenum = START_PAGE; pagenum < END_PAGE + 1; pagenum += 1) {
      pages.push(fetchPage(year, pagenum));
    }
  }

  await Promise.all(pages);

  console.log(years);

  await browser.close();
})();
