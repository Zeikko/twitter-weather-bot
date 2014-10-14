'use strict'

var _ = require('lodash');

module.exports = {
	getTemperatures: getTemperatures,
	coldest: coldest,
	warmest: warmest,
	mean: mean,
	difference: difference
}

function getTemperatures(data) {
    return _.map(data, 'temperature');
}

function coldest(data) {
    return _.min(data, function(weather) {
        return weather.temperature;
    });
};

function warmest(data) {
    return _.max(data, function(weather) {
        return weather.temperature;
    });
};

function mean(data) {
    var sum = _.reduce(getTemperatures(data), function(sum, num) {
        return sum + num;
    });
    return Math.round(sum / data.length);
}

function difference(data) {
	return warmest(data).temperature - coldest(data).temperature;
}
