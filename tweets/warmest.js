'use strict'

var stem = require('./stem');

exports.getTweets = function(weather) {
    var tweets = [

        function(weather) {
            return stem.in(weather.location) + ' on ' + weather.temperature + ' °C';
        }
    ];

    if (weather.temperature > 20) {
        tweets = tweets.concat([

            function(weather) {
                return stem.in(weather.location) + ' on kuuma! ' + weather.temperature + ' °C';
            }
        ]);
    }
    return tweets;
}
