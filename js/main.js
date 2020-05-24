const cheerio = require('cheerio');
const request = require('request');

const username = 'username';
const url = `https://www.instagram.com/${username}/`;

request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    let userInfo = $("meta[property='og:description']").attr('content');
    let userUrl = $("meta[property='og:url']").attr('content');

    getUserInfo(userInfo);
    //console.log(userInfo, userUrl);
  }
});

function getUserInfo(str) {
  let followers = '';
  let following = '';
  let posts = '';
  let spaces = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') spaces++;
    if (spaces === 0) followers += str[i];
    if (spaces === 2) following += str[i];
    if (spaces === 4) posts += str[i];
  }
  console.log(followers, following, posts);
}
