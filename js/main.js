const cheerio = require('cheerio');
const request = require('request');

const username = 'username';
const url = `https://www.instagram.com/${username}/`;

request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    let userInfo = $("meta[property='og:description']").attr('content');
    let userUrl = $("meta[property='og:url']").attr('content');
  }
});
