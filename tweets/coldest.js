'use strict'

var stem = require('./stem');

exports.getTweets = function(weather) {
    var tweets = [
        function(weather) {
            return stem.in(weather.location) + ' on ' + weather.temperature + ' °C';
        }
    ];

    if (weather.temperature < 0) {
        tweets = tweets.concat([
            function(weather) {
                return stem.in(weather.location) + ' on kylmä! ' + weather.temperature + ' °C';
            }
        ]);
    }

    return tweets;
}
