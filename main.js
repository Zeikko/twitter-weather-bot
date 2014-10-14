'use strict'

var weatherApi = require('./weatherApi'),
    TwitterBot = require("node-twitterbot").TwitterBot,
    weather = require('./weather.js');

var bot = new TwitterBot("config/config.json");

bot.addAction("tweet", function(twitter, action, tweet) {
    Bot.tweet("Testi");
}).group("tweet posting");

/*
bot.listen("listening", function(tweet) {
    return true;
}, function(twitter, action, tweet) {
    console.log(twitter);
    console.log(action);
    console.log(tweet);
});
*/
weatherApi.getCurrentWeather(handleWeather);
setInterval(function() {
    weatherApi.getCurrentWeather(handleWeather);
}, 4 * 60 * 60 * 1000);

function handleWeather(err, data) {
	weather.handleWeather(err, data, bot);
}
