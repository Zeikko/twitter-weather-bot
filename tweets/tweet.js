var _ = require('lodash'),
	moment = require('moment'),
    tweets = {
        coldest: require('./coldest'),
        warmest: require('./warmest'),
    };

exports.tweet = function(type, bot, weather) {
    var tweetText = _.sample(tweets[type].getTweets(weather))(weather);
    sendTweet(bot, tweetText);
}

function sendTweet(bot, tweetText) {
    console.log(moment(new Date()).format('DD.MM.YYYY HH:MM:SS') + ' tweeting: "' + tweetText + '"');
    //bot.tweet(tweetText);
}
