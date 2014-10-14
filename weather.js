'use strict'

var _ = require('lodash'),
	temperature = require('./temperature'),
	tweet = require('./tweets/tweet').tweet;

exports.handleWeather = function(err, data, bot) {
	var coldest = temperature.coldest(data);
	tweet("coldest", bot, coldest);
	var warmest = temperature.warmest(data);
	tweet("warmest", bot, warmest);
	
	/*
	console.log(temperature.coldest(data));
	console.log(temperature.warmest(data));
	console.log(temperature.mean(data));
	console.log(temperature.difference(data));
	*/
}